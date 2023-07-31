//----------------------------------------------------------------
//                        Votre code ici
//----------------------------------------------------------------

  
function higher(notes) {
    // la moyenne des notes
    const moyenne = notes.reduce((sum, note) => sum + note, 0) / notes.length;
  
    // plus grand que la moyenne
    const aboveNotes = notes.filter((note) => note > moyenne);
  
    return aboveNotes;
  }

//----------------------------------------------------------------
//                     Section à conserver
//----------------------------------------------------------------
const notes = [95.5, 100, 60, 68, 70]
console.log(higher(notes))