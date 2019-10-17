let numtask = 0;

function aggiungi() {
  //crea div task
  var div = document.createElement("div");
  div.className = "task";
  //div.setAttribute("id", "task");
  div.innerHTML = document.getElementById("input").value;
  var compiti = document.getElementById("compiti");
  compiti.appendChild(div);
  numtask++;

  //crea task, bottone chiudi e spunta
  let testo_input = document.getElementById("input").value;
  document.getElementById("input").value = "";

  let bottoni ="<span id='text'>";
  bottoni += testo_input;
  bottoni += "</span><div class='bottone'><button class='Chiudi' onclick((this.innerText))>&#128465;</button><button class='Spunta' onclick='spuntato()'>\u2713</button></div>";
  div.innerHTML = bottoni;
}

function spuntato(){
  if (document.getElementById("text").style.textDecoration === "line-through"){
    document.getElementById("text").style.textDecoration = "none";
  }else{
    document.getElementById("text").style.textDecoration = "line-through";
  }
}

var div_task = document.getElementById('compiti');
for (var i = 0; i < numtask; i++) {
    div_task[i].onclick = spuntato();
}