async function buscarDados() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Dados recebidos:", data);
    } catch (error) {
        console.log("Erro ao buscar dados:", error);
    }
}

buscarDados();
// Resultado esperado: Lista de usuários ou mensagem de erro
