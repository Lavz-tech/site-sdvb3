// main.js - SDVB3
// Fichier JS pour les interactions futures (Sentry, etc.)

// Page connexion : simulation de connexion (maquette, aucun envoi)
const loginForm = document.getElementById("login-form");

if (loginForm) {
  const message = document.getElementById("login-message");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    message.classList.remove("is-error", "is-success");

    if (!loginForm.checkValidity()) {
      message.textContent =
        "Veuillez saisir une adresse e-mail valide et un mot de passe d'au moins 6 caractères.";
      message.classList.add("is-error");
      return;
    }

    message.textContent =
      "Maquette : connexion simulée. Aucune authentification réelle n'a été effectuée.";
    message.classList.add("is-success");
    loginForm.reset();
  });
}
