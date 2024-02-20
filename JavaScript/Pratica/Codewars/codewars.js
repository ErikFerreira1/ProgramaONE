function DesafioCode(num) {
  let somaNum = 0;
  for (let numeros of num) {
    if (numeros > 0) {
      somaNum += numeros;
    }
  }
  return somaNum;
}

let num = [-2, 1, 5, -15, 9];
console.log(DesafioCode(num));
