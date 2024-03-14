async function buscarFilme() {
  const nameMovie = document.getElementById("valorfilme").value;
  const infos = document.getElementById("infos");
  const valueSelect = document.getElementById("selectGenre").value;

  infos.innerHTML = "";
  if (nameMovie === "" || valueSelect === "select the genre") {
    alert("Por favor, preencha todos os campos!");
  } else {
    try {
      const url = `https://www.omdbapi.com/?apikey=7c667d40&t=${nameMovie}&s=${nameMovie}&type=${valueSelect}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Erro ao carregar dados!");
      }
      const data = await response.json();

      if (!data.Search || data.Search.length === 0) {
        alert("Nenhum resultado encontrado!");
      }

      for (const filme of data.Search) {
        const movieInfo = document.createElement("div");
        movieInfo.classList.add("movie-info");

        const imagemFilme = document.createElement("img");
        imagemFilme.src =
          filme.Poster != "N/A" ? filme.Poster : "./image/noimage.jpg";

        const tituloFilme = document.createElement("h1");
        tituloFilme.innerText = filme.Title;

        const anoFilme = document.createElement("p");
        anoFilme.innerText = filme.Year;

        movieInfo.appendChild(imagemFilme);
        movieInfo.appendChild(tituloFilme);
        movieInfo.appendChild(anoFilme);
        infos.appendChild(movieInfo);
      }
    } catch (error) {
      console.error("Ocorreu um erro", error);
    }
  }
}
