const pessoa = {
    nome: "Túlio",
    falar: function() {
      console.log("Meu nome é " + this.nome);
    },
  };
  
  pessoa.falar(); // Imprime "Meu nome é Túlio"
  