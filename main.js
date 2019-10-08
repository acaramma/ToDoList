function aggiungi() {
  //crea div task
  var div = document.createElement("div");
  div.setAttribute("id", "task");
  div.innerHTML = document.getElementById("input").value;
  var container = document.getElementById("container");
  container.appendChild(div);

  //crea task, bottone chiudi e spunta
  var testo_input = document.getElementById("input").value;
  document.getElementById('input').value = "";

  var bottoni ="<span id='text'>";
  bottoni += testo_input;
  bottoni += "</span><div class='button'><button id='Chiudi' onclick='rimuovi()'>&#128465;</button><button id='Spunta' onclick='spuntato()'>\u2713</button></div>"
  div.innerHTML = bottoni;
}

function rimuovi(){
  var canc = document.getElementById("task");
  canc.parentNode.removeChild(canc);
}

function spuntato(){  
  if(document.getElementById("text").style.textDecoration == "line-through"){
    document.getElementById("text").style.textDecoration = "none";
  }else{
    document.getElementById("text").style.textDecoration = "line-through";
  }
}