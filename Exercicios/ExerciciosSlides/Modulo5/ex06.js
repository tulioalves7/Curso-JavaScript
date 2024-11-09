const turma = [
    { nome: "Ana", idade: 20 },
    { nome: "Carlos", idade: 22 },
    { nome: "Maria", idade: 19 }
];
turma[1].idade = 23;
console.log(turma[1]); // { nome: "Carlos", idade: 23 }
