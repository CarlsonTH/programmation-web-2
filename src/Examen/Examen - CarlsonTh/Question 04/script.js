//----------------------------------------------------------------
//                        Votre code ici
//----------------------------------------------------------------

function getElementById() {
    const thirdParagraph = document.getElementById('game').getElementsByTagName('p')[2];
    thirdParagraph.textContent = 'Toc';
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const buttonA = document.querySelector('.btn-primary:nth-of-type(1)');
    buttonA.addEventListener('click', getElementById);
  });

  function querySelector() {
    const thirdParagraph = document.querySelector('#game p:nth-of-type(3)');
    thirdParagraph.textContent = 'Toc';
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const buttonB = document.querySelector('.btn-primary:nth-of-type(2)');
    buttonB.addEventListener('click', querySelector);
  });