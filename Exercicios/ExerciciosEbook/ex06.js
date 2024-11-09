function processarNumeros(numeros, callback) {
    let resultado = [];

    for (let numero of numeros) {
        resultado.push(callback(numero));
    }

    return resultado;
}

function multiplicarPorDois(numero) {
    return numero * 2;
}

let numeros = [1, 2, 3, 4, 5];
console.log(processarNumeros(numeros, multiplicarPorDois));
