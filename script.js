let txtPrompt2 = `mariusAalto@getAcademy:$`;
let command;
let i = 0;
let activeWindow;

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

let projects = [
	{
		name: "Turn-based RPG",
		link: "https://github.com/aaltofar/Turn-Based-RPG",
	},
	{
		name: "Sorteringsalgorytme visualisering",
		link: "https://github.com/aaltofar/sorting-algorithms",
	},
	{
		name: "Vanne-Plante-App",
		link: "https://github.com/aaltofar/Vanne-plante-app",
	},
	{
		name: "Weather Forecast App",
		link: "https://github.com/aaltofar/Weather_App",
	},
	{
		name: "Hobby Generator",
		link: "https://github.com/aaltofar/HobbyGenerator",
	},
];

let noCmd = `
Jeg gjenkjenner ikke kommandoen din... Skriv kun bokstaven som står inne i klammene []
`;

function makeProjectList() {
	let html = "";
	for (let i = 0; i < projects.length; i++) {
		html += `  <a>${projects[i].name}</a>`;
	}
	return html;
}

let projectsList = `
  Her finner du noen av prosjektene mine, men flere finnes på GitHub.
  <div class="projectView">${makeProjectList()}</div>
`;

let commandList = `
  Mulige kommandoer:
  	  -[H]jelp
  	  -[P]rosjekter
  	  -[C]V
  	  -[L]enker og kontakt
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
  Skriv [H]jelp for kommandoliste
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
		case "Hjelp":
		case "h":
		case "hjelp":
			document.getElementById("textPasteField").innerHTML =
				logo + commandList + inputBox;
			break;
		case "P":
		case "Prosjekter":
		case "p":
		case "prosjekter":
			document.getElementById("textPasteField").innerHTML =
				logo + projectsList + inputBox;
			break;
		case "C":
		case "CV":
		case "c":
		case "cv":
			activeWindow = new Window("ikkebruk", "CV", "CV");
			activeWindow.windowOpen();
			break;
		case "L":
		case "Lenker":
		case "l":
		case "lenker":
			document.getElementById("textPasteField").innerHTML =
				logo + links + inputBox;
			break;
		case "T":
		case "Tøm terminalen":
		case "t":
		case "tøm terminalen":
			document.getElementById("textPasteField").innerHTML = inputBox;
			break;
		default:
			document.getElementById("textPasteField").innerHTML =
				noCmd + commandList + inputBox;
	}
}

function newWindow(titleBarTxt) {
	let html = `
	<div class="window">
		<div class="title-bar">
			<div class="title-bar-text">${titleBarTxt}</div>
			<div class="title-bar-controls">
				<button aria-label="Close"></button>
			</div>
		</div>
	</div>;
	`;
	return html;
}

class Window {
	constructor(link, projName, pageType) {
		(this.link = link), (this.projName = projName), (this.pageType = pageType);
	}

	windowOpen() {
		if (this.pageType == "CV") {
			document.getElementById("app").innerHTML = `
			<div class="title-bar">
				<div class="title-bar-text">C:\\My Documents\\${this.projName}</div>
				<div class="title-bar-controls">
					<button
						aria-label="Help"
						onclick="test()"></button>
					<button aria-label="Close" onclick="activeWindow.windowClose()"></button>
				</div>
			</div>
			<div class="window-body">
			<iframe src="cv.pdf" width="100%" height="1200px">
			</iframe>
  </div>
			
			`;
		} else {
			document.getElementById("app").innerHTML = `
		<div class="title-bar">
				<div class="title-bar-text">C:\\My Documents\\${this.projName}</div>
				<div class="title-bar-controls">
					<button
						aria-label="Help"
						onclick="test()"></button>
					<button aria-label="Close" onclick="activeWindow.windowClose()"></button>
				</div>
			</div>
			<div class="window-body">
    <p>There's so much room for activities!</p>
  </div>
		`;
		}
	}

	windowClose() {
		document.getElementById("app").innerHTML = `
		<div class="title-bar">
				<div class="title-bar-text">MAIP v0.9</div>
				<div class="title-bar-controls">
					<button
						aria-label="Help"></button>
					<button aria-label="Close"></button>
				</div>
			</div>
			<pre id="textPasteField">${txtPrompt} + ${inputBox}</pre>
		`;
		updateView();
	}
}

function test() {
	activeWindow = new Window("testeteste", "testingtesting");
	activeWindow.windowOpen();
	console.log(activeWindow);
}
