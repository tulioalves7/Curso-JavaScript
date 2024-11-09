function saudar(nome) {
    function dizerOla() {
        return "Olá";
    }
    return `${dizerOla()}, ${nome}!`;
}
console.log(saudar("Maria")); // Resultado: "Olá, Maria!"
