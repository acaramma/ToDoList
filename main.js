//bottone chiudi
			var lista_nodi = document.getElementsByTagName("li");
			var i;
			for (i = 0; i < lista_nodi.length; i++) {
			  var span = document.createElement("span");
			  var txt = document.createTextNode("\u00D7");
			  span.className = "close";
			  span.appendChild(txt);
			  lista_nodi[i].appendChild(span);
			}

			var chiudi = document.getElementsByClassName("Chiudi");
			var i;
			for (i = 0; i < chiudi.length; i++) {
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

			  for (i = 0; i < chiudi.length; i++) {
			    chiudi[i].onclick = function() {
			      var div = this.parentElement;
			      div.style.display = "none";
			    }
			  }
			}