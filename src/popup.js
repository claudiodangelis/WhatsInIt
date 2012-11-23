var bg = chrome.extension.getBackgroundPage();



document.getElementById("contents").innerHTML=bg.buildTable();

function download(what){
	window.location=what;
}