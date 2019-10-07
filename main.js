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
  var task = "<span>" + testo_input + "</span>";
  document.getElementById('input').value = "";
  
  var chiudi_bottone = "<button id='Chiudi' onclick='rimuovi()'>\u00D7</button>";
  var spunta = "<button id='Spunta'>\u2713</button>";
  div.innerHTML = task + "<div>" + chiudi_bottone + spunta + "</div>";
}

function rimuovi(){

}

/*
var divbtn = document.createElement("div");
  divbtn.className = "btn_div";
  divbtn.innerHTML = document.getElementById("input").value;
  var divtask = document.getElementsByClassName("task");
  divtask.appendChild(divbtn);
 divbtn.innerHTML = chiudi_bottone + spunta;*/