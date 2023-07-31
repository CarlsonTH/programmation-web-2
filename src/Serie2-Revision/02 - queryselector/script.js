// A) 
function cleanErrorA() {
    const messagesDiv = document.getElementById('messages');
    const errorMessage = messagesDiv.querySelector('p[style="color:darkred"]');
    if (errorMessage) {
      messagesDiv.removeChild(errorMessage);
    }
  }
  
  // B) 
  function cleanErrorB() {
    const errorMessage = document.querySelector('p[style="color:darkred"]');
    if (errorMessage) {
      errorMessage.remove();
    }
  }
  