const bolo = {
    sabor: "chocolate",
    fazerBolo: function() {
      console.log("Este bolo é de " + this.sabor);
    },
  };
  
  bolo.fazerBolo(); // Vai imprimir "Este bolo é de chocolate"
  
  //
  
  
  const bolo2 = {
    sabor: "morango",
    fazerBolo: () => {
      console.log("Este bolo é de " + this.sabor);
    },
  };
  
  bolo.fazerBolo(); // Pode imprimir "Este bolo é de undefined"
  