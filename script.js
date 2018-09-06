function afficherProblem (type, message){
	alert("type: " + type + " problem: " + message); 
}

document.getElementById("zone-danger").addEventlistener("click", afficherProblem("zone interdire","ne pas cliquer ici !!));