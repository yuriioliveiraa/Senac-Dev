function calcularSoma() {
    // Obter os valores inseridos pelo usuário
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    // Verificar se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, informe dois números válidos.");
    return;
    }
    // Calcular a soma
    let soma = numero1 + numero2;
    let sub = numero1 - numero2;
    let mult = numero1 * numero2;
    let divisao = numero1 / numero2;
    // Exibir o resultado
    document.getElementById('soma').textContent = soma;
    document.getElementById('sub').textContent = sub;
    document.getElementById('mult').textContent = mult;
    document.getElementById('divisao').textContent = divisao;


    document.getElementById('resultado').style.display = 'block';
}