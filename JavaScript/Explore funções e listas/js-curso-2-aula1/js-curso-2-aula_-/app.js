let numeroSecreto = numeroAleatorio();
let tentativas = 0;

function MudarTextoTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
function exibirMensagemInicial() {
  MudarTextoTela("h1", "Jogo do número secreto");
  MudarTextoTela("p", "Escolha um número de 1 a 10");
}
exibirMensagemInicial()
function verificarChute() {
  chute = document.querySelector("input").value;
  tentativas++;
  if (chute == numeroSecreto) {
    let mensagem = tentativas > 1 ? "tentativas" : "tentativa";
    MudarTextoTela("h1", "Você acertou!");
    MudarTextoTela(
      "p",
      `Parabéns! Você acertou o número secreto com ${tentativas} ${mensagem}.`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      MudarTextoTela("h1", "Você errou!");
      MudarTextoTela("p", "O número secreto é menor");
    } else {
      MudarTextoTela("h1", "Você errou!");
      MudarTextoTela("p", "O número secreto é maior");
    }
  }
  LimparCampo();
}

function numeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function LimparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function ReiniciarJogo() {
  numeroSecreto = numeroAleatorio();
  LimparCampo();
  tentativas = 0
  exibirMensagemInicial()
  document.getElementById("reiniciar").setAttribute("disabled", true)
}
