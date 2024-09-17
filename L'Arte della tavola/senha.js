document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("As senhas não conferem!");
        return;
    }

    if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        return;
    }

    // Enviar os dados para o servidor (exemplo de exibição)
    alert(`E-mail: ${email}\nNova Senha: ${password}`);
});
