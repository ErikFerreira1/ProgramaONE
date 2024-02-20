const novaTarefa = document.getElementById("novaTarefa");
const adicionarTarefa = document.getElementById("adicionarTarefa");
const listaTarefas = document.getElementById("listaTarefa");

adicionarTarefa.addEventListener("click", function () {
  const valorTarefa = novaTarefa.value;
  const itemLista = document.createElement("li");

  itemLista.textContent = valorTarefa;
  listaTarefas.appendChild(itemLista);
});

listaTarefas.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("concluida");
  }
});
