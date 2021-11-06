// Recorre de manera horizontal la matriz correspondiente a la secuencia de ADN en busca de coincidencias
exports.recorridoHorizontal = async function (matriz) {
    let result = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if ((matriz.length-j) >= 4) {
                if (matriz[i][j] === matriz[i][j+1] && matriz[i][j] === matriz[i][j+2] && matriz[i][j] === matriz[i][j+3]) {
                    result++;
                }
            }
        }
    }
    return result;
}

// Recorre de manera vertical la matriz correspondiente a la secuencia de ADN en busca de coincidencias
exports.recorridoVertical = async function (matriz) {
    let result = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if ((matriz.length-i) >= 4) {
                if (matriz[i][j] === matriz[i+1][j] && matriz[i][j] === matriz[i+2][j] && matriz[i][j] === matriz[i+3][j]) {
                    result++;
                    j = j + 3;
                }
            }
        }
    }
    return result;
}

// Busca de manera oblicua (izquierda a derecha) la matriz correspondiente a la secuencia de ADN
busquedaOblicuoID = async function (matriz, len, i, j, indLim) {
    let result = 0;
    let lim = 0;
    while (i<=len-1 && j<=len-1) {
        if (indLim === "J") {
            lim = len-j;
        } else {
            lim = len-i;
        }
        if (lim>=4) {
            if (matriz[i][j] === matriz[i+1][j+1] && matriz[i][j] === matriz[i+2][j+2] && matriz[i][j] === matriz[i+3][j+3]) {
                result++;
            }
        }
        i += 1;
        j += 1;
    }
    return result;
}

// Recorre de manera oblicua (izquierda a derecha) la matriz correspondiente a la secuencia de ADN
exports.recorridoOblicuoID = async function (matriz) {
    let i = 0;
    let j = 0;
    let result = 0;
    for (let x = matriz.length-1; x >= 0; x--) {
        if (x===0) {
            for (let y = 0; y < matriz.length; y++) {
                i = x;
                j = y;
                let cont = await busquedaOblicuoID(matriz, matriz.length, i, j, "J");
                result += cont;
            }
        } else {
            i = x;
            let cont = await busquedaOblicuoID(matriz, matriz.length, i, j, "I");
            result += cont;
        }
    }
    return result;
}

// Busca de manera oblicua (derecha a izquierda) la matriz correspondiente a la secuencia de ADN
busquedaOblicuoDI = async function (matriz, len, i, j, indLim) {
    let result = 0;
    let lim = 0;
    while (i<=(len-1) && j>=0) {
        if (indLim === "J") {
            lim = j;
        } else {
            lim = len-i-1;
        }
        if (lim >= 3) {
            if (matriz[i][j] === matriz[i+1][j-1] && matriz[i][j] === matriz[i+2][j-2] && matriz[i][j] === matriz[i+3][j-3]) {
                result++;
            }
        }
        i += 1;
        j -= 1;
    }
    return result;
}

// Recorre de manera oblicua (derecha a izquierda) la matriz correspondiente a la secuencia de ADN
exports.recorridoOblicuoDI = async function (matriz) {
    let i = 0;
    let j = 0;
    let result = 0;
    for (let y = 0; y <= matriz.length-1; y++) {
        if (y == (matriz.length-1)) {
            for (let x = 0; x <= matriz.length-1; x++) {
                i = x;
                j = y;
                let cont = await busquedaOblicuoDI(matriz, matriz.length, i, j, "I");
                result += cont;
            }
        } else {
            i = y;
            let cont = await busquedaOblicuoDI(matriz, matriz.length, i, j, "J");
            result += cont;
        }
    }
    return result;
}