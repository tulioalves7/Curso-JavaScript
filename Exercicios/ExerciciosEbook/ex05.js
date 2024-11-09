function calcularTotal(carrinho) {
    let total = 0;

    for (let item of carrinho) {
        total += item.preco * item.quantidade;
    }

    return total;
}

let carrinho = [
    { nome: "Notebook", quantidade: 1, preco: 3000 },
    { nome: "Smartphone", quantidade: 2, preco: 2000 }
];

console.log("Total: R$", calcularTotal(carrinho));
