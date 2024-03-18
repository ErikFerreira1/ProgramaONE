async function buscarFilme() {
  const nameMovie = document.getElementById("valorfilme").value;
  const infos = document.getElementById("infos");
  const valueSelect = document.getElementById("selectGenre").value;

  infos.innerHTML = "";
  if (nameMovie === "" || valueSelect === "select the genre") {
    alert("Por favor, preencha todos os campos!");
  } else {
    try {
      const apiKey = "f7618a55c1d648cc00383ed3b123cffe";
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${nameMovie}&include_adult=false`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Erro ao carregar dados!");
      }

      const data = await response.json();

      if (data.results.length === 0) {
        alert("Nenhum resultado encontrado!");
      }

      for (const filme of data.results) {
        const movieInfo = document.createElement("div");
        movieInfo.classList.add("movie-info");

        const imagemFilme = document.createElement("img");
        imagemFilme.src = filme.poster_path
          ? `https://image.tmdb.org/t/p/w500/${filme.poster_path}`
          : "./image/noimage.jpg";

        const tituloFilme = document.createElement("h1");
        tituloFilme.innerText = filme.title;

        const anoFilme = document.createElement("p");
        anoFilme.innerText = filme.release_date.substring(0, 4);

        const notaFilme = document.createElement("p");
        notaFilme.innerText = `Nota: ${filme.vote_average}`;

        movieInfo.appendChild(imagemFilme);
        movieInfo.appendChild(tituloFilme);
        movieInfo.appendChild(anoFilme);
        movieInfo.appendChild(notaFilme);
        infos.appendChild(movieInfo);
      }
    } catch (error) {
      console.error("Ocorreu um erro", error);
    }
  }
}
