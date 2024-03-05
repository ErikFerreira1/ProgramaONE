async function filmin() {
  let nameMovie = document.getElementById("valorfilme").value;
  
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=7c667d40&t=${nameMovie}&s=${nameMovie}`
    );
    if (!response.ok) {
      throw new error("Error ao carregar dados!");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Ocorreu um erro", error);
  }

  
}
function clicou() {
  filmin()
}
//7c667d40
