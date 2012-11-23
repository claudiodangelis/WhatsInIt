var bg = chrome.extension.getBackgroundPage();

buildTable(bg.getContent());

function buildTable(content){

	for ( var key in content ){
		element = document.createElement("a");
		element.href=content[key];
		element.innerHTML=key;

		element.onclick = (function(what) {return function(){download(what);};})(content[key]);

		document.getElementById("content").appendChild(element);
	}

}

function download(what){
	console.log("Scarico "+what);
	chrome.tabs.create({'url': what}, function(tab) {
    console.log("chiaaaaa");
  });}