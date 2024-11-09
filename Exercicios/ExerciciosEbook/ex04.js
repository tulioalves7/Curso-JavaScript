let produtos = [
    { nome: "Notebook", categoria: "Tecnologia", preco: 3000 },
    { nome: "Geladeira", categoria: "Eletrodoméstico", preco: 2500 },
    { nome: "Smartphone", categoria: "Tecnologia", preco: 2000 },
    { nome: "Fogão", categoria: "Eletrodoméstico", preco: 1500 }
];

let produtosTecnologia = produtos.filter(produto => produto.categoria === "Tecnologia");

console.log(produtosTecnologia);
