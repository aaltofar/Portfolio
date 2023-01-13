let txtPrompt2 = `mariusAalto@getAcademy:$`;
let command;
let i = 0;

function updateView() {
	document.getElementById("textPasteField").innerHTML = logo;
	typeWriter();
}

function typeWriter() {
	if (i < txtPrompt.length) {
		document.getElementById("textPasteField").innerHTML += txtPrompt.charAt(i);
		i++;
		setTimeout(typeWriter, 5);
	} else {
		document.getElementById("textPasteField").innerHTML += inputBox;
	}
}

let commandList = `
  Mulige kommandoer:
  	  -[H]jelp
  	  -[P]rosjekter
  	  -[C]V
  	  -[L]enker
  	  -[T]øm terminalen
`;

let txtPrompt = `
  Velkommen til MAIP v0.9 (Marius Aalto sin interaktive portefølje) !
  Skriv inn en kommando og trykk enter.
  ${commandList}
`;

let logo = `						
 .d888888   .d888888   dP        d888888P  .88888.  
 d8'    88  d8'    88  88           88    d8'   '8b 
 88aaaaa88  88aaaaa88  88           88    88     88 
 88     88  88     88  88           88    88     88 
 88     88  88     88  88           88    Y8.   .8P 
 88     88  88     88  88888888P    dP     '8888P'  
****************************************************
`;

let inputBox = `
  <label for="cmd">user@MAIP.GETACADEMY$:</label><input id="cmd" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  autofocus oninput="cmdInput(this.value)" onchange="runCommand(this)" class="inputField" type="text"/>
`;

let links = `
  Her finner du lenker til mine sosiale nettverk:
  	<a href="https://github.com/aaltofar">GitHub</a>
  	<a href="https://www.linkedin.com/in/marius-aalto-7549531a2/">LinkedIn</a>
`;

function cmdInput(value) {
	command = value;
	console.log(command);
}

function runCommand() {
	switch (command) {
		case "H":
			document.getElementById("textPasteField").innerHTML =
				logo + commandList + inputBox;
			break;
		case "P":
			break;
		case "C":
			break;
		case "L":
			document.getElementById("textPasteField").innerHTML =
				logo + links + inputBox;
			break;
		case "T":
			document.getElementById("textPasteField").innerHTML = inputBox;
			break;
	}
}
