function calculo() {
  const nomeInput = document.getElementById("nome");
  const alturaInput = document.getElementById("altura");
  const pesoInput = document.getElementById("peso");
  const resultado = document.getElementById("resultado");

  const nome = nomeInput.value;
  const altura = parseFloat(alturaInput.value);
  const peso = parseFloat(pesoInput.value);

  if (nome && altura && peso) {
    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);
    resultado.innerHTML = `${nome}, seu IMC é ${imc.toFixed(1)} e você está ${classificacao}`;
  } else {
    resultado.innerHTML = "Preencha todos os campos!";
  }
}

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 25) {
    return "Peso ideal";
  } else if (imc < 30) {
    return "Levemente acima do peso";
  } else if (imc < 35) {
    return "Obesidade grau 1";
  } else if (imc < 40) {
    return "Obesidade grau 2 (Severa)";
  } else {
    return "Obesidade tipo 3 (Mórbida)";
  }
}