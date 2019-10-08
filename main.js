/*
  var chiudi = document.getElementsByClassName("Chiudi");
  for (var i = 0; i < chiudi.length; i++) {
  chiudi[i].onclick = function() {
  var div = this.parentElement;
  div.parentNode.removeChild(div);
*/
function aggiungi() {
  //crea div task
  var div = document.createElement("div");
  div.className = "task";
  div.innerHTML = document.getElementById("input").value;
  var container = document.getElementById("container");
  container.appendChild(div);

  //crea task, bottone chiudi e spunta
  var testo_input = document.getElementById("input").value;
  document.getElementById('input').value = "";

  var bottoni ="<span id='text'>";
  bottoni += testo_input;
  bottoni += "</span><div class='button'><button id='Chiudi' onclick='rimuovi()'>\u00D7</button><button id='Spunta' onclick='spuntato()'>\u2713</button></div>"
  div.innerHTML = bottoni;
}

function rimuovi(){
  var canc = document.getElementsByClassName("task")[0];
  canc.remove();
}

function spuntato(){
  document.getElementById("text").style.textDecoration = "line-through";
}