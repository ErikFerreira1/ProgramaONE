function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
document.addEventListener("DOMContentLoaded", async function () {
  const movieID = sessionStorage.getItem("movieID");

  if (movieID) {
    try {
      const apiKey = "f7618a55c1d648cc00383ed3b123cffe";
      const searchUrl = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=pt-BR`;

      const searchResponse = await fetch(searchUrl);

      if (!searchResponse.ok) {
        throw new Error("Erro ao carregar dados!");
      }

      const searchData = await searchResponse.json();
      console.log(searchData);
      const banner = document.getElementById("mainBannerIntro");
      banner.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${searchData.backdrop_path}')`;

      const posterMovie = document.querySelector(".posterMovie");
      const poster = this.createElement("img");

      poster.src = searchData.poster_path
        ? `https://image.tmdb.org/t/p/w500/${searchData.poster_path}`
        : "../../assets/noimage.jpg";
      posterMovie.appendChild(poster);

      const movieTitle = document.getElementById("titleMovie-ch");
      movieTitle.innerText = searchData.title;

      const movieSynopsis = document.getElementById("movieSynopsis-ch");
      movieSynopsis.innerText = searchData.overview;

      const genrer = document.getElementById("genrer");
      genrer.innerHTML = "";

      if (searchData.genres && searchData.genres.length > 0) {
        const genresList = searchData.genres.map((genre) => genre.name);
        genrer.innerText = genresList.join(", ");
      } else {
        genrer.innerText = "Gênero não disponível";
      }

      const release = document.getElementById("release");
      if (searchData.release_date) {
        const releaseDate = new Date(searchData.release_date);
        const formattedReleaseDate = releaseDate.toLocaleDateString("pt-BR");
        release.innerText = formattedReleaseDate;
      } else {
        release.innerText = "Data de lançamento não disponível";
      }
    } catch (error) {
      console.error("Ocorreu um erro", error);
    }

    sessionStorage.removeItem("movieTitle");
  } else {
    console.error("O título do filme não foi encontrado.");
  }
});
