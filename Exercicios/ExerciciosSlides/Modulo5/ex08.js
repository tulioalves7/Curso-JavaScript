const turma = [
    { nome: "Ana", idade: 20 },
    { nome: "Carlos", idade: 22 },
    { nome: "Maria", idade: 19 }
];
const nomesAlunos = turma.map(aluno => aluno.nome);
console.log(nomesAlunos); // Resultado: ["Ana", "Carlos", "Maria"]
