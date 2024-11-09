async function buscarEndereco() {
    const cep = document.getElementById("cep").value;
    if (!cep) {
        alert("Por favor, insira um CEP!");
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) throw new Error("Erro ao buscar o CEP");
        
        const endereco = await response.json();
        
        if (endereco.erro) {
            alert("CEP não encontrado!");
            return;
        }

        document.getElementById("rua").value = endereco.logradouro || "";
        document.getElementById("bairro").value = endereco.bairro || "";
        document.getElementById("cidade").value = endereco.localidade || "";
        document.getElementById("estado").value = endereco.uf || "";
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao buscar dados. Tente novamente.");
    }
}
