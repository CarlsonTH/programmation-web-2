//----------------------------------------------------------------
//                        Votre code ici
//----------------------------------------------------------------
function double(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'number') {
        obj[key] *= 2;
      }
    }
  }
  return obj;
}

//----------------------------------------------------------------
//                     Section à conserver
//----------------------------------------------------------------
const account = {
  name : "Épargne",
  operations : 25,
  balance : -50.25
}

console.log(double(account))