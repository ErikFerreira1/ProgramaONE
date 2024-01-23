alert("Seja bem vindo ao jogo!");
let NumSecret = 3;
let tries = 1;
let NumChoice;

while (NumChoice != NumSecret) {
  NumChoice = prompt("Escolha um número de 1 a 10");
  if (NumChoice == 3) {
    break
  } else {
    if(NumChoice > NumSecret){
        alert(`O número secreto é menor que ${NumChoice}`)
    }else{
        alert(`O número secreto é maior que ${NumChoice}`)
    };
    tries++;
  }
}
let wordChoice = tries > 1 ? "tentativas" : "tentativa"
alert(
  `Parabéns você acertou o número. Você escolheu ${NumChoice} e o número era ${NumSecret}. ${tries} ${wordChoice}`
);