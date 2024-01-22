alert("Seja bem vindo ao jogo!")
let NumSecret = 3
let NumChoice = prompt("Digite um número:")
if (NumChoice == 3) {
    alert(`Parabéns você acertou o número. Você escolheu ${NumChoice} e o número era ${NumSecret}`)
}else {
    alert("Você Errou")
}