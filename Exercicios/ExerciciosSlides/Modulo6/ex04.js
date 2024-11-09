async function buscarUsuarios() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log("Usuários:", users);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

buscarUsuarios();
// Resultado esperado: Lista de usuários ou mensagem de erro
