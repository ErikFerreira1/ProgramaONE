let lista = []

function Adicionar() {
  let valorTarefa = document.getElementById("novaTarefa").value;
  let listaTarefa = document.getElementById("listaTarefa");
  let itemLista = document.createElement("li")

  if (lista.includes(valorTarefa) == false) {
    lista.push(valorTarefa)
    itemLista.innerText = valorTarefa
    listaTarefa.appendChild(itemLista)
  }else {
    alert("O item já está na lista")
  }
  
  console.log(lista)

  
}
function Limpar() {
  let limparLista = document.getElementById("listaTarefa")
  limparLista.innerHTML = ""
  lista = []
  console.log(lista)
}

