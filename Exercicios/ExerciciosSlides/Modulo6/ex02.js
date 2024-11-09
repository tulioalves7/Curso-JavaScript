fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            console.log(`Nome: ${user.name}, Email: ${user.email}`);
        });
    })
    .catch(error => console.log("Erro ao buscar dados:", error));
// Resultado esperado: Uma lista com nomes e e-mails dos usuários
