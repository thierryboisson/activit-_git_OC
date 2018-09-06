function afficherProblem (type, message){
	alert("type: " + type + " problem: " + message); 
}

document.getElementById("zone-danger").addEventlistener("click", afficher("zone interdire","ne pas cliquer ici !!));