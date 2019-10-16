function aggiungi() {
  //crea div task
  var div = document.createElement("div");
  div.className = "task";
  //div.setAttribute("id", "task");
  div.innerHTML = document.getElementById("input").value;
  var container = document.getElementById("container");
  container.appendChild(div);

  //crea task, bottone chiudi e spunta
  let testo_input = document.getElementById("input").value;
  document.getElementById("input").value = "";

  let bottoni ="<span id='text'>";
  bottoni += testo_input;
  bottoni += "</span><div class='bottone'><button id='Chiudi' onclick='rimuovi()'>&#128465;</button><button id='Spunta' onclick='spuntato()'>\u2713</button></div>";
  div.innerHTML = bottoni;
}

function spuntato(){
  if (document.getElementById("text").style.textDecoration === "line-through"){
    document.getElementById("text").style.textDecoration = "none";
  }else{
    document.getElementById("text").style.textDecoration = "line-through";
  }
}

function rimuovi(){
  var canc = document.getElementsByClassName("task");
  var button = document.getElementById("Chiudi");
  button.onclick = function(){
    for (var i = 0; i < canc.length; i++) {
      canc[i].parentNode.removeChild(canc[i]);
    }
  }
}