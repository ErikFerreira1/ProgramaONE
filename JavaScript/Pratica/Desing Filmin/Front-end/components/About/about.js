function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }
  document.addEventListener("DOMContentLoaded", function () {
    function checkAuth() {
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("username");
      const loginButton = document.getElementById("loginButton");
      const usernameDisplay = document.getElementById("usernameDisplay");
  
      if (token && username) {
        loginButton.style.display = "none";
        usernameDisplay.innerText ="Olá, " + username;
        usernameDisplay.style.display = "block";
       
      } else {
        loginButton.style.display = "block";
        usernameDisplay.style.display = "none";
      }
    }
  
    checkAuth();

  })