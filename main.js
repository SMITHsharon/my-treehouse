

var outputHTML = document.getElementById("pageContainer");

console.log("running main.js");

var myRequest = new XMLHttpRequest();

function executeThisCodeAfterFileLoaded(){

	var xhrData = JSON.parse(this.responseText);
	writeToDOM(xhrData.badges);
}

function executeThisCodeAfterFileFails(){
	console.log("whoops! error!");
}

function writeToDOM (dataObject) {

	var courseString = "";
	var currentCourse;

	for (var i=0; i<dataObject.length; i++) {
		currentCourse = dataObject[i]; 
		console.log("dataObject[i] :: ", dataObject[i]);
		
			courseString += `<div class="courseContainer">`;
			courseString += `<h4 class="courseHeader">${currentCourse.name}</h4>`
			courseString += `<img class="badgeURL" src="${currentCourse.icon_url}" alt="course badge">`
			courseString += `</div>`;
	}
	outputHTML.innerHTML = courseString;

}


myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "https://teamtreehouse.com/mitchellblom.json");
myRequest.send();


