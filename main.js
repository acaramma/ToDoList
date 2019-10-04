//bottone chiudi e spunta
var lista_nodi = document.getElementsByTagName("li");
for (var i = 0; i < lista_nodi.length; i++) {
  var div_chiudi = document.createElement("div");                     //ho aggiunto 
  div_chiudi.className = "div_chiudi";                                       //queste 2
  document.getElementById("Lista").appendChild(div);                  //assd
  var button = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  button.className = "Chiudi";
  button.appendChild(txt);
  lista_nodi[i].appendChild(button);

  var button2 = document.createElement("button");
  var txt2 = document.createTextNode("\u2713");
  button2.className = "Spunta";
  button2.appendChild(txt2);
  lista_nodi[i].appendChild(button2);
}

var chiudi = document.getElementsByClassName("Chiudi");
for (var i = 0; i < chiudi.length; i++) {
  chiudi[i].onclick = function() {
    var div = this.parentElement;
    item.parentNode.removeChild(item);
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


  var button = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  button.className = "Chiudi";
  button.appendChild(txt);
  li.appendChild(button);

  var button2 = document.createElement("button");
  var txt2 = document.createTextNode("\u2713");
  button2.className = "Spunta";
  button2.appendChild(txt2);
  li.appendChild(button2);

  for (i = 0; i < chiudi.length; i++) {
    chiudi[i].onclick = function() {
      var div = this.parentElement;
      item.parentNode.removeChild(div);
    }
  }
}