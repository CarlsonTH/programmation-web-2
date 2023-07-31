function getData() {
    const dataDiv = document.querySelector('[data-firstname][data-lastname]');
  
    const firstname = dataDiv.dataset.firstname;
    const lastname = dataDiv.dataset.lastname;
  
    const welcomeMessage = `Bienvenue à ${firstname} ${lastname} !`;
    document.getElementById('name').textContent = welcomeMessage;
  }
  