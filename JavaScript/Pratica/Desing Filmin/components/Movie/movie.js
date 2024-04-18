function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
  const movieTitle = sessionStorage.getItem("movieTitle");

  if (movieTitle) {
    console.log(movieTitle);
    sessionStorage.removeItem("movieTitle");
  } else {
    console.error("O título do filme não foi encontrado.");
  }
});
