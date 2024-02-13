function calculo() {
  let nome = document.getElementById("nome").value;
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;
  let resultado = document.getElementById("resultado");

  if (nome != "" && altura != "" && peso != "") {
    let valorResultado = peso / (altura * altura).toFixed(1);
    let classificação = "";
    if (valorResultado < 18.5) {
      classificação = "Abaixo do peso";
    }
    if (valorResultado >= 18.6 && valorResultado <= 24.9) {
      classificação = "Peso ideal";
    }
    if (valorResultado >= 25 && valorResultado <= 29.9) {
      classificação = "levemente acima do peso";
    }
    if (valorResultado >= 30 && valorResultado <= 34.9) {
      classificação = "Obesidade grau 1";
    }
    if (valorResultado >= 35 && valorResultado <= 39.9) {
      classificação = "Obesidade grau 2 (Severa)";
    }
    if (valorResultado > 40) {
      classificação = "Obesidade tipo 3 (mórbida)";
    }
    resultado.innerHTML = `${nome} seu IMC é ${valorResultado} e você está ${classificação}`;
  } else {
    resultado.innerHTML = "Preencha todos os campos!";
  }
}
