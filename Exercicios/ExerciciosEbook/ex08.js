async function buscarDados() {
    try {
        let resposta = await fetch('https://jsonplaceholder.typicode.com/users/4');
        let dados = await resposta.json();
        console.log(dados);
    } catch (erro) {
        console.error("Erro ao buscar os dados", erro);
    }
}

buscarDados();
