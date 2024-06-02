function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "f7618a55c1d648cc00383ed3b123cffe";
  const genreSelect = document.getElementById("genre");
  const form = document.getElementById("searchForm");
  const resultsDiv = document.getElementById("results");
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  async function getGenres() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`
      );
      const data = await response.json();
      const genres = data.genres;
      genres.forEach((genre) => {
        const option = document.createElement("option");
        option.value = genre.id;
        option.textContent = genre.name;
        genreSelect.appendChild(option);
      });
    } catch (error) {
      console.error("Erro ao obter gêneros:", error);
    }
  }

  async function searchMovies(event) {
    event.preventDefault();
    const genre = genreSelect.value;
    const minDuration = 60;
    const releaseYear = document.getElementById("releaseYear").value;

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=${genre}&sort_by=popularity.desc`;

    if (releaseYear) {
      const currentYear = new Date().getFullYear();

      url += `&primary_release_date.gte=${releaseYear}-01-01&primary_release_date.lte=${currentYear}-12-31`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      const moviesWithDetails = await Promise.all(
        data.results.map(async (movie) => {
          const movieDetails = await getMovieDetails(movie.id);
          return { ...movie, runtime: movieDetails.runtime };
        })
      );
      const filteredMovies = moviesWithDetails.filter(
        (movie) => movie.runtime >= minDuration
      );

      const sortedMovies = filteredMovies.sort(
        (a, b) => b.vote_average - a.vote_average
      );

      displayResults(sortedMovies);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  }

  async function getMovieDetails(movieId) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao obter detalhes do filme:", error);
    }
  }

  function displayResults(movies) {
    resultsDiv.innerHTML = "";
    if (movies.length === 0) {
      resultsDiv.innerHTML = "<p>Nenhum filme encontrado.</p>";
    } else {
      movies.forEach((movie) => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
                  <img src="${imageBaseUrl + movie.poster_path}" alt="${
          movie.title
        } poster">
                  <div>
                      <h2>${movie.title}</h2>
                      <p>Nota: ${movie.vote_average}</p>
                      <p>Ano: ${new Date(movie.release_date).getFullYear()}</p>
                      <p>Duração: ${movie.runtime} minutos</p>
                  </div>
              `;
        resultsDiv.appendChild(movieElement);
      });
    }
  }

  getGenres();
  form.addEventListener("submit", searchMovies);

  function checkAuth() {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const loginButton = document.getElementById("loginButton");
    const usernameDisplay = document.getElementById("usernameDisplay");
    const logout = document.getElementById("idlogoutButton");

    if (token && username) {
      loginButton.style.display = "none";
      usernameDisplay.innerText = "Olá, " + username;
      usernameDisplay.style.display = "block";
    } else {
      loginButton.style.display = "block";
      logout.style.display = "none";
      usernameDisplay.style.display = "none";
    }
  }

  checkAuth();

  document
    .getElementById("idlogoutButton")
    .addEventListener("click", function () {
      localStorage.removeItem("token");
      localStorage.removeItem("username");

      window.location.href = "../../index.html";
    });
});
