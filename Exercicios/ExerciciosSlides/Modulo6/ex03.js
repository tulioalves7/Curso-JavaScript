fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log("Dados carregados com sucesso!", data);
    })
    .catch(error => console.error("Erro:", error));
// Resultado esperado: "Dados carregados com sucesso!" e a lista de usuários
