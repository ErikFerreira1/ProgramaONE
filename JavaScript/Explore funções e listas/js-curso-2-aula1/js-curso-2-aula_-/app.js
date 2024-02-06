let numeroSecreto = numeroAleatorio()

function MudarTextoTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
MudarTextoTela("h1", "Jogo do número secreto");
MudarTextoTela("p", "Escolha um número de 1 a 10");

function verificarChute() {
    chute = document.querySelector("input").value
    console.log(numeroSecreto)
    console.log(chute == numeroSecreto);
}

function numeroAleatorio() {
    return parseInt(Math.random() * 10 + 1 )
}