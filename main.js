function operazioni() {
  //crea div task
  let div = document.createElement("div");
  div.className = "task";
  div.innerHTML = document.getElementById("input").value;
  let compiti = document.getElementById("compiti");
  compiti.appendChild(div);                                                                     //aggiunge un nodo alla fine della lista dei figli di un nodo padre

  //crea task, bottone chiudi
  let testo_input = document.getElementById("input").value;
  document.getElementById("input").value = "";
  let string = "<span class='text' style='text-decoration:none'>";
  string += testo_input;
  string += "</span><button class='Chiudi'>&#128465;</button>";
  div.innerHTML = string;                                                                       //imposta il contenuto html all'interno dell'elemento

  //testo barrato
  let numtask = document.getElementsByClassName("text").length;
  for(let i = 0; i < numtask; i++){
    let text = document.getElementsByClassName("text")[i];
    text.onclick = function(){                                                                  //onclick = sovrascrive gli eventi esistenti
      this.style.textDecoration === "line-through" ? this.style.textDecoration = "none" : this.style.textDecoration = "line-through"
    }
  }

  //cancella div task
  numtask = document.getElementsByClassName("Chiudi").length;
  for (let i = 0; i < numtask; i++) {
    let button = document.getElementsByClassName("Chiudi")[i];
    button.addEventListener("click", function(){
      this.parentElement.remove();                                                              //rimuove il padre dell'evento click
    });
  }
}