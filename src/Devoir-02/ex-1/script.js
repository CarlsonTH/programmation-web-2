function tableauNombresAleatoires(taille) {
    const tableau = [];
    for (let i = 0; i < taille; i++) {
      const nombreAleatoire = Math.floor(Math.random() * 100) + 1;
      tableau.push(nombreAleatoire);
    }
    return tableau;
  }
  
  function genererTableau() {
    const tailleTableau = 25;
    const tableauAleatoire = tableauNombresAleatoires(tailleTableau);
    const resultatDiv = document.getElementById("resultat");
    resultatDiv.innerHTML = "<pre>" + JSON.stringify(tableauAleatoire, null, 2) + "</pre>";
  }