
console.log("running main.js");

var myRequest = new XMLHttpRequest();

function executeThisCodeAfterFileLoaded(){

	var data = JSON.parse(this.responseText);
	console.log("my-Treehouse Data: ", data);
}

function executeThisCodeAfterFileFails(){
	console.log("whoops! error!");
}


myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "https://teamtreehouse.com/mitchellblom.json");
myRequest.send();


