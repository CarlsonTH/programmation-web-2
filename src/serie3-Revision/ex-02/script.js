const amountInput = document.getElementById('amountInput');
const currencySelect = document.getElementById('currencySelect');
const resultDiv = document.getElementById('resultDiv');

// Fonction de conversion de devises
function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  if (isNaN(amount)) {
    resultDiv.textContent = 'Veuillez saisir un montant valide.';
    return;
  }

  const selectedCurrency = currencySelect.value;
  let convertedAmount;

  switch (selectedCurrency) {
    case 'USD':
      convertedAmount = amount * 1.18; 
      break;
    case 'GBP':
      convertedAmount = amount * 0.86;
      break;
    case 'JPY':
      convertedAmount = amount * 130.88;
      break;
    default:
      resultDiv.textContent = 'Devise non prise en charge.';
      return;
  }

  resultDiv.textContent = `${amount.toFixed(2)} euros équivaut à ${convertedAmount.toFixed(2)} ${selectedCurrency}.`;
}


amountInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    convertCurrency();
  }
});
