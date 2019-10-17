var numtask = 0;

function aggiungi() {
  //crea div task
  var div = document.createElement("div");
  div.className = "task";
  div.innerHTML = document.getElementById("input").value;
  var compiti = document.getElementById("compiti");
  compiti.appendChild(div);
  numtask++;

  //crea task, bottone chiudi e spunta
  var testo_input = document.getElementById("input").value;
  document.getElementById("input").value = "";

  var string ="<span id='text' style='text-decoration:none'>";
  string += testo_input;
  string += "</span><div class='bottone'><button class='Chiudi' onclick='elimina()'>&#128465;</button><button id='Spunta' onclick='barrato()'>&check;</button></div>";
  div.innerHTML = string;
}

function barrato(){

}

function elimina(){

}