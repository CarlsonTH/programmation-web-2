
function submit() {
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
  
    const emailForm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailForm.test(emailInput.value)) {
      emailInput.style.border = '2px solid red';
      alert('Veuillez saisir une adresse e-mail valide.');
      return;
    }
  
    if (passwordInput.value.length < 8) {
      passwordInput.style.border = '2px solid red';
      alert('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }
  
    alert('Connexion effectuée avec succès.');
  }
  