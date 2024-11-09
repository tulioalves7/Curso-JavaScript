function ehPar(num) {
    return num % 2 === 0;
}
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(ehPar);
console.log(pares); // Resultado: [2, 4]
