const form = document.getElementById('login');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch('http://localhost:3002/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, senha })
        });

        const results = await response.json();
        console.log(results);  

        if (results.success) {
            alert('Login bem-sucedido');
            window.location.assign('principal.html');  
        } else {
            alert('Usuário ou senha incorreto');
        }
    } catch (error) {
        console.error('Erro ao tentar logar:', error);
        alert('Erro ao tentar logar');
    }
});


