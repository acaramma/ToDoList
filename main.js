function operazioni() {

  //crea div task
  var div = document.createElement("div");
  div.className = "task";
  div.innerHTML = document.getElementById("input").value;
  var compiti = document.getElementById("compiti");
  compiti.appendChild(div);

  //crea task, bottone chiudi
  var testo_input = document.getElementById("input").value;
  document.getElementById("input").value = "";
  var string = "<span class='text' style='text-decoration:none'>";
  string += testo_input;
  string += "</span><button class='Chiudi'>&#128465;</button>";
  div.innerHTML = string;

  //testo barrato
  //var parent = document.getElementById("compiti");        
  for (var i = 0; i < document.getElementsByClassName("text").length; i++) {
    var text = document.getElementsByClassName("text")[i];
    text.addEventListener("click", function(){
      if(this.style.textDecoration === "line-through"){
        this.style.textDecoration = "none";
      }else{
        this.style.textDecoration = "line-through";
      }
    });
  }

  //cancella div task
  //var parent = document.getElementById("compiti");
  for (var i = 0; i < document.getElementsByClassName("Chiudi").length; i++) {
    var button = document.getElementsByClassName("Chiudi")[i];
    button.addEventListener("click", function(){
      this.parentElement.remove();
    });
  }
}