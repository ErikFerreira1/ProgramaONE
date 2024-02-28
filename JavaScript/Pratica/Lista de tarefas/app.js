let lista = [];

function Adicionar() {
  let valorTarefa = document.getElementById("novaTarefa").value;
  let listaTarefa = document.getElementById("listaTarefa");
  
  if (lista.includes(valorTarefa) == false) {
    lista.push(valorTarefa);

    // Adicionar item
    let itemLista = document.createElement("li");
    itemLista.innerText = valorTarefa;
    listaTarefa.appendChild(itemLista);

    // Botão de exclusão
    let deleteItem = document.createElement("button");
    deleteItem.innerText = "x";
    itemLista.appendChild(deleteItem);
  
    deleteItem.addEventListener("click", function delItem() {
      let removerItemLista = lista.indexOf(valorTarefa)
      if(removerItemLista != -1) {
        lista.splice(removerItemLista, 1)
        listaTarefa.removeChild(itemLista)
      }
      
    });

  } else {
    alert("O item já está na lista");
  }
  console.log(lista);
}

function Limpar() {
  let limparLista = document.getElementById("listaTarefa");
  limparLista.innerHTML = "";
  lista = [];
  console.log(lista);
}
