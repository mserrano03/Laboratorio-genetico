const MutationModel = require("../schemas/Mutation.schema");
const MutationValidator = require("./Validator.dao");
const MutationFind = require("./Find.dao");

// Almacena la secuencia de ADN y su estado (si es mutacion o no) en la base de datos
postMutation = async function (adn, isMutation) {
    let mutationObject = {
        "string": adn,
        "isMutation": isMutation
    };

    await MutationModel.findOne({ string: mutationObject.string }, async function (err, res) {
        if (err) return err;
        if (res == undefined) {
            const newMutationModel = await new MutationModel(mutationObject);
            newMutationModel.save(mutationObject);
        }
    });
}

// Obtiene las colecciones correspondientes a los registros de mutaciones almacenados en la BD según su estatus
getMutationByStatus = async function (status) {
    let result = await MutationModel.find({ isMutation: status }, async function (err, res) {
        if (err) return err;
    });
    return result;
}

// Obtiene las ultimas 10 colecciones correspondientes a los registros de mutaciones almacenados en la BD
exports.getMutation = async function () {
    let result = await MutationModel.find().sort({ createdAt: -1 }).limit(10);
    return result;
}

// Obtiene un reporte con las estadisticas de las verificaciones de ADN
exports.getMutationReport = async function () {
    let isMutation = await getMutationByStatus(true);
    let isntMutation = await getMutationByStatus(false);
    let report = {
        "count_mutations": isMutation.length,
        "count_no_mutation": isntMutation.length,
        "ratio": (isMutation.length/isntMutation.length)
    };
    return report;
}

exports.hasMutation = async function (params) {
    let stringAdn = await MutationValidator.converterArray(params.string);
    // Validador del arreglo de Strings representando a la secuencia de ADN
    let adn = await MutationValidator.basesValidador(stringAdn)
    // Contador de secuencias horizontales
    let recHorDI = await MutationFind.recorridoHorizontal(stringAdn);
    // COntador de secuencias vertical
    let recVerDI = await MutationFind.recorridoVertical(stringAdn);
    // Contador de secuencias Oblicuo de izquierda a derecha
    let recIzDer = await MutationFind.recorridoOblicuoID(stringAdn);
    // COntador de secuencias Oblicuo de derecha a izquierda
    let recDerIz = await MutationFind.recorridoOblicuoDI(stringAdn);
    if (adn) {
        if ((recHorDI + recVerDI + recIzDer + recDerIz) >= 2) { // Con mutacion en la secuencia de ADN
            await postMutation(params.adn, true);
            return true;
        } else { // Sin mutacion en la secuencia de ADN
            await postMutation(params.adn, false);
            return false;
        }
    } else {
        return 0;
    }
}