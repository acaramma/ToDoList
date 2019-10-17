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

  var string ="<span class='text' style='text-decoration:none'>";
  string += testo_input;
  string += "</span><button class='Chiudi' onclick='elimina()'>&#128465;</button>";
  div.innerHTML = string;

  //clicca sul testo per barrarlo
  $(".text").click(function(){
    $(this).css("text-decoration", "line-through");
  });
}

/*function elimina(){
  var button = document.getElementsByClassName('Chiudi');
  for(var i = 0; i < numtask; i++){
    button[i].onclick = function(){ 

    };
  }
}*/