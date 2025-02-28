function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;
    return true;
}

function verificarCPF() {
    const cpfInput = document.getElementById("cpf");
    const status = document.getElementById("cpf-status");
    if (validarCPF(cpfInput.value)) {
        status.textContent = "CPF Válido";
        status.style.color = "green";
    } else {
        status.textContent = "CPF Inválido";
        status.style.color = "red";
    }
}

async function buscarCEP() {
    const cep = document.getElementById("cep").value;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    if (!data.erro) {
        document.getElementById("endereco").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("estado").value = data.uf;
    } else {
        alert("CEP não encontrado!");
    }
}