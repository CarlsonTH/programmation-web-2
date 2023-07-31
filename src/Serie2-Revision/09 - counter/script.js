let count = 0;
let max = 10;

function updateCount() {
  const countElement = document.getElementById('count');
  const fullMessage = document.getElementById('full');
  const incrementBtn = document.getElementById('increment');

  countElement.textContent = count;

  if (count >= max) {
    fullMessage.style.display = 'block';
    incrementBtn.disabled = true;
  } else {
    fullMessage.style.display = 'none';
    incrementBtn.disabled = false;
  }
}

function increment() {
  if (count < max) {
    count++;
    updateCount();
  }
}

function decrement() {
  if (count > 0) {
    count--;
    updateCount();
  }
}

function changeMax() {
  max = parseInt(document.getElementById('max').value, 10);
  updateCount();
}

document.getElementById('increment').addEventListener('click', increment);
document.getElementById('decrement').addEventListener('click', decrement);
