function calcularTaxa() {
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    var resultado = document.getElementById("resultado");
  
    var taxa;
    if (idade >= 60) {
        taxa = 10;
    } else if (idade > 50) {
        taxa = 15;
    } else if (idade >= 10){
        taxa = 20;
    } else {
        taxa = 50;
    }
    if (nome === "" || isNaN(idade)) {
        resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
        resultado.style.color = "red";
        return;
    }
    resultado.innerHTML = nome + ", você pagará R$ " + taxa + " para entrar no clube.";
}