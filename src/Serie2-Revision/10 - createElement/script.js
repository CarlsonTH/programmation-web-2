/* Voici un exemple de la structure à ajouter à root
<tr>
  <th scope="col">1</th>
  <td>Balayeuse</td>
  <td>Passer la balayeuse demain</td>
  <td></td>
</tr>
*/

let taskId = 1;

function add() {
  const titleInput = document.getElementById('title');
  const descriptionInput = document.getElementById('description');

  
  const title = titleInput.value;
  const description = descriptionInput.value;

  if (!title || !description) {
    alert('Merci de remplire les cases');
    return;
  }


  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${taskId}</td>
    <td>${title}</td>
    <td>${description}</td>
    <td>
      <button class="btn btn-danger" onclick="remove(this)">Supprimer</button>
    </td>
  `;

  taskId++;

  const tableBody = document.getElementById('root');
  tableBody.appendChild(newRow);

  titleInput.value = '';
  descriptionInput.value = '';
}

function remove(button) {
  const row = button.parentNode.parentNode;
  row.remove();
}

