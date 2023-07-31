function lancerDice() {
    const dice1Result = Math.floor(Math.random() * 6) + 1;
  
    const dice2Result = Math.floor(Math.random() * 6) + 1;
  
    const total = dice1Result + dice2Result;
  
    // Mettre à jour les éléments
    document.getElementById('dice1').textContent = dice1Result;
    document.getElementById('dice2').textContent = dice2Result;
    document.getElementById('total').textContent = total;
}