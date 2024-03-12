async function buscarFilme() {
  const nameMovie = document.getElementById("valorfilme").value;
  const infos = document.getElementById("infos");

  infos.innerHTML = ""

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=7c667d40&t=${nameMovie}&s=${nameMovie}`
    );

    if (!response.ok) {
      throw new Error("Erro ao carregar dados!");
    }

    const data = await response.json();
    for (let i = 0; i < data.Search.length; i++) {
      const movieInfo = document.createElement("div");
      movieInfo.classList.add("movie-info");

      const tituloFilme = document.createElement("h1");
      const anoFilme = document.createElement("p");
      const imagemFilme = document.createElement("img");
      const primeiroFilme = data.Search[i];

      tituloFilme.innerText = primeiroFilme.Title;
      anoFilme.innerText = primeiroFilme.Year;
      imagemFilme.src = primeiroFilme.Poster;

      movieInfo.appendChild(imagemFilme);
      movieInfo.appendChild(tituloFilme);
      movieInfo.appendChild(anoFilme);

      infos.appendChild(movieInfo);
    }
  } catch (error) {
    console.error("Ocorreu um erro", error);
  }
}
