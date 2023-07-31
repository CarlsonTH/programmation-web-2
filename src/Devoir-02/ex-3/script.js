function filtrerTableau(tableau) {
  return tableau.filter(nombre => nombre * nombre > 5000);
}

function genererTableauAleatoire(taille) {
  const tableauAleatoire = [];
  for (let i = 0; i < taille; i++) {
    const nombreAleatoire = Math.floor(Math.random() * 100); // Nombres aléatoires entre 0 et 99
    tableauAleatoire.push(nombreAleatoire);
  }
  return tableauAleatoire;
}

const tailleTableau = 10;
const tableauAleatoire = genererTableauAleatoire(tailleTableau);
console.log("Tableau initial :", tableauAleatoire);

const tableauFiltre = filtrerTableau(tableauAleatoire);
console.log("Tableau filtré :", tableauFiltre);
