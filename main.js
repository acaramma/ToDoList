//bottone chiudi e spunta
var lista_nodi = document.getElementsByTagName("li");
for (var i = 0; i < lista_nodi.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "Chiudi";
  span.appendChild(txt);
  lista_nodi[i].appendChild(span);

  var span2 = document.createElement("span");
  var txt2 = document.createTextNode("\u2713");
  span2.className = "Spunta";
  span2.appendChild(txt2);
  lista_nodi[i].appendChild(span2);
}

var chiudi = document.getElementsByClassName("Chiudi");
for (var i = 0; i < chiudi.length; i++) {
  chiudi[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// aggiungi task
function aggiungi() {
  var li = document.createElement("li");
  var testo_input = document.getElementById("input").value;
  var t = document.createTextNode(testo_input);
  li.appendChild(t);
  if (testo_input === '') {
    alert("Il campo e' obbligatorio");
  } else {
    document.getElementById("Lista").appendChild(li);
  }
 	document.getElementById("input").value = "";			

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "Chiudi";
  span.appendChild(txt);
  li.appendChild(span);

  var span2 = document.createElement("span");
  var txt2 = document.createTextNode("\u2713");
  span2.className = "Spunta";
  span2.appendChild(txt2);
  li.appendChild(span2);

  for (i = 0; i < chiudi.length; i++) {
    chiudi[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}