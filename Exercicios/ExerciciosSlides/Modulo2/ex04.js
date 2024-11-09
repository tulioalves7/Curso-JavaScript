var globalVar = "Sou global";

if (true) {
  let localLet = "Sou local";
  console.log(globalVar); // Acessível dentro da função
  console.log(localLet);  // Acessível dentro do bloco
}

console.log(globalVar); // Acessível fora do bloco
console.log(localLet);  // Erro, `let` não é acessível fora do bloco

