//----------------------------------------------------------------
//                        Votre code ici
//----------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.querySelector("input[type='text']");
  const countElement = document.getElementById("count");
  const entryElement = document.getElementById("entry");

  let characterCount = 0;
  let lastEnteredLetter = "";

  inputElement.addEventListener("input", function () {
    const inputValue = this.value;
    characterCount = inputValue.length;
    lastLetter = inputValue.charAt(inputValue.length - 1);

    countElement.textContent = `Il y a ${characterCount} caractères`;
    entryElement.textContent = `Le dernière caractère entré est un ${lastLetter}`;
  });
});
