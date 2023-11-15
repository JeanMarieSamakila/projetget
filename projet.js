

let menu;
    menu = prompt(`select number
                  -------------
                  1. List task
                  2. Add task
                  3. Remove
                  4. Complete task
                  5. Exit`);
    switch (menu) {
        case "1":
            alert(add);
            break;
        case "2":
            let add1 = prompt("Ajouter une tache");
            let add = prompt("Ajouter une tache");
            alert(add1,  add);
            break;
        case "3":
            let remove = prompt("Supprimer une tache");
            alert("remove")
            break;
        case "4":
            let complete = prompt("Tache completée");
            alert("complete")
            break;
        default:
          ("Rien n'as afficher de cette valeur")
          break;
      }