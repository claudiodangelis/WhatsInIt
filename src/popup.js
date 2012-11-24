var bg = chrome.extension.getBackgroundPage();

buildTable(bg.getContent());

function buildTable(content){

	for ( var key in content ){
		element = document.createElement("a");
		element.href=content[key];
		element.innerHTML=key;

		element.onclick = (function(url) {
			return function(){
				download(url);
			};
		})(content[key]);

		document.getElementById("content").appendChild(element);
	}

}

function download(url){
	chrome.tabs.create({'url': url}, function(tab) {});}