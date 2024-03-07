async function buscarFilme() {
  const nameMovie = document.getElementById("valorfilme").value;
  const tituloFilme = document.getElementById("titulo");
  const anoFilme = document.getElementById("anoFilme");
  const imagemFilme = document.getElementById("imagemFilme");

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=7c667d40&t=${nameMovie}&s=${nameMovie}`
    );

    if (!response.ok) {
      throw new Error("Erro ao carregar dados!");
    }

    const data = await response.json();
    const primeiroFilme = data.Search[0];

    tituloFilme.innerText = primeiroFilme.Title;
    anoFilme.innerText = primeiroFilme.Year;
    imagemFilme.src = primeiroFilme.Poster;
  } catch (error) {
    console.error("Ocorreu um erro", error);
  }
  
}
