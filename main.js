function operazioni() {

  //crea div task
  let div = document.createElement("div");
  div.className = "task";
  div.innerHTML = document.getElementById("input").value;
  let compiti = document.getElementById("compiti");
  compiti.appendChild(div);

  //crea task, bottone chiudi
  let testo_input = document.getElementById("input").value;
  document.getElementById("input").value = "";
  let string = "<span class='text' style='text-decoration:none'>";
  string += testo_input;
  string += "</span><button class='Chiudi'>&#128465;</button>";
  div.innerHTML = string;

  //testo barrato
  for(let i = 0; i < document.getElementsByClassName("text").length; i++){
    let text = document.getElementsByClassName("text")[i];
    text.onclick = function(){
      this.style.textDecoration === "line-through" ? this.style.textDecoration = "none" : this.style.textDecoration = "line-through"
    }
  }

  //cancella div task
  for (let i = 0; i < document.getElementsByClassName("Chiudi").length; i++) {
    let button = document.getElementsByClassName("Chiudi")[i];
    button.addEventListener("click", function(){
      this.parentElement.remove();
    });
  }
}