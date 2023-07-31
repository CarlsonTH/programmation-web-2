
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

//Fonction pour créer une tâche avec une case à cocher
function createTask(taskText) {
  const taskItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', tacheTerminer);


  const taskTextSpan = document.createElement('span');
  taskTextSpan.innerText = taskText;
  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskTextSpan);

  return taskItem;
}

// Fonction pour ajouter une nouvelle tâche
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return; 

  const newTaskItem = createTask(taskText);
  // Ajouter à la liste
  taskList.appendChild(newTaskItem);
  // Réinitialiser l'entrée
  taskInput.value = '';
}


function tacheTerminer(event) {
  const checkbox = event.target;
  const taskTextSpan = checkbox.nextElementSibling;

  if (checkbox.checked) {
    taskTextSpan.style.textDecoration = 'line-through';
    taskTextSpan.style.color = 'lightgreen';
    taskTextSpan.innerText += ' - - - - Terminée';
  } else {
    taskTextSpan.style.textDecoration = 'none';
    taskTextSpan.style.color = 'black';
    taskTextSpan.innerText = taskTextSpan.innerText.replace(' - - - - Terminée', '');
  }
}

taskInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
