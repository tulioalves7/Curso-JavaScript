for (let i = 0; i < 3; i++) {
    console.log("Dentro do loop:", i);
  }
  console.log("Fora do loop:", i); // Erro, pois `let` tem escopo de bloco
  