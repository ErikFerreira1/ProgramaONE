document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
      const data = await response.json();

      if (response.ok) {
        // Cadastro bem-sucedido, redirecionar para a página de login ou exibir uma mensagem de sucesso
        alert(data.msg); // Exemplo: "Usuário criado com sucesso!"
        window.location.href = '../Login/login.html'; // Redireciona para a página de login
      } else {
        // Cadastro falhou, exibir mensagem de erro
        alert(data.msg); // Exemplo: "Email em uso!"
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao processar o cadastro.');
    }
  });