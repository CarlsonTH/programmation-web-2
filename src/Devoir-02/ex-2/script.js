
function insererNombreAleatoire(tableau, nombre) {
  const indexAleatoire = Math.floor(Math.random() * (tableau.length + 1));
  tableau.splice(indexAleatoire, 0, nombre);
  return tableau;
}

const monTableau = [1, 2, 3, 4, 5];
const nombreAInserer = 10;

const nouveauTableau = insererNombreAleatoire(monTableau, nombreAInserer);
console.log(nouveauTableau);