//----------------------------------------------------------------
//                     Section à conserver
//----------------------------------------------------------------
const tasks = {
  nextID : 90,
  data : [
    {title: "Balayeuse", description: "Passer la balayeuse au sous-sol"},
    {title: "Vitres", description: "Acheter un appareil pour laver les vitres du 2ième"},
    {title: "Plâtre", description: "Finir de sabler les murs du chalet"},
    {title: "Nettoyage", description: "Faire le nettoyage régulier de la maison"},
    {title: "Bois", description: "Fendre et corder le bois de chauffage"},
  ]
}

//----------------------------------------------------------------
//                        Votre code ici
//----------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const loadBtn = document.querySelector(".btn-primary");
  const rootElement = document.getElementById("root");

  loadBtn.addEventListener("click", function () {
    let tableHTML = "";
    tasks.data.forEach((task, index) => {
      tableHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${task.title}</td>
          <td>${task.description}</td>
          <td></td>
        </tr>
      `;
    });
    rootElement.innerHTML = tableHTML;
  });
});