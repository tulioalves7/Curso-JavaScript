let produtos = [
    { nome: "Notebook", preco: 3000 },
    { nome: "Smartphone", preco: 2000 },
    { nome: "Tablet", preco: 1500 }
];

for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].nome + ": R$" + produtos[i].preco);
}
