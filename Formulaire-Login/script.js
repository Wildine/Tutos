document.getElementById('togglePasswordIcon').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.setAttribute('name', 'eye');
    } else {
        passwordInput.type = 'password';
        this.setAttribute('name', 'eye-off');
    }
});


function validatePassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.style.display = "block"; // Afficher le message d'erreur
    } else {
        errorMessage.style.display = "none";  // Cacher le message d'erreur
        alert("Mot de passe validé!");
        // Ici, tu peux soumettre le formulaire ou passer à la prochaine étape
    }
}
