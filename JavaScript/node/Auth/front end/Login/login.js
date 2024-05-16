document.addEventListener("DOMContentLoaded", function () {document
    .getElementById("loginForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
  
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
  
      try {
        const response = await fetch("http://127.0.0.1:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
  
        if (response.ok) {
          alert(data.msg);
          window.location.href = '../../index.html'
        } else {
          alert(data.msg);
        }
      } catch (error) {
        console.error("Erro:", error);
        alert("Ocorreu um erro ao processar o login.");
      }
    });
  }
)
