function submit() {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
  

    if (email === "" || password === "") {
      alert("Veuillez remplir tous les champs.");
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Veuillez saisir une adresse e-mail valide.");
      return;
    }
  
    if (password.length < 8) {
      alert("Le mot de passe doit comporter au moins 8 caractères.");
      return;
    }
    alert("Formulaire soumis avec succès !");
  }
  