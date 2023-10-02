function validatePassword() {
    var password = document.getElementById('senha').value;
    var confirmSenha = document.getElementById('confirm_senha').value;

    if (password !== confirmSenha) {
        alert('As senhas não coincidem.');
        return false;
    }

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!password.match(passwordRegex)) {
        alert('A senha deve conter pelo menos 6 caracteres, 1 letra maiúscula, 1 número e 1 caractere especial.');
        return false;
    }

    return true;
}