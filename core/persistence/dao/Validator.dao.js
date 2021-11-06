// Valida que las letras de los String solo sean A, T, C y G
exports.basesValidador = async function (matriz) {
    let result = true;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j] !== "A" && matriz[i][j] !== 'T' && matriz[i][j] !== 'C' && matriz[i][j] !== 'G') {
                result = false;
            }
        }
    }
    return result;
}