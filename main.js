let numtask = 0;
function aggiungi() {
  //crea div task

  let div = document.createElement("div");
  div.className = "task";
  div.innerHTML = document.getElementById("input").value;
  let container = document.getElementById("container");
  container.appendChild(div);

  //crea task, bottone chiudi e spunta
  let testo_input = document.getElementById("input").value;
  document.getElementById("input").value = "";

  let bottoni ="<span class='text'>";
  bottoni += testo_input;
  bottoni += "</span><div class='bottone'><button id='Chiudi' onclick='rimuovi()'>&#128465;</button><button id='Spunta' onclick='spuntato()'>\u2713</button></div>";
  div.innerHTML = bottoni;
  numtask++;
}


function rimuovi(){
  var canc = document.getElementsByClassName("task");
  var len = canc.length;
  for(var i = 0; i < len; i++) {
    canc[i].parentNode.removeChild(canc[i]);
  }
}
      

function spuntato(){    
  if(document.getElementsByClassName("text").style.textDecoration == "line-through"){
    document.getElementsByClassName("text").style.textDecoration = "none";
  }else{
    document.getElementsByClassName("text").style.textDecoration = "line-through";
  }
}