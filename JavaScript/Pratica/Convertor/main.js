function convertCurrency() {
  let valorCoverter = document.getElementById("fromAmount").value;
  let valorEscolha = document.getElementById("toCurrency").value;
  let valorConvertido = document.getElementById("toAmount");
  if (valorEscolha == "USD") {
    let valorConvertidoUSD = (valorCoverter * 0.2).toFixed(2);
    valorConvertido.value = valorConvertidoUSD;
  }
  if (valorEscolha == "EUR") {
    let valorConvertidoEUR = (valorCoverter * 0.18).toFixed(2);
    valorConvertido.value = valorConvertidoEUR;
  }
}
