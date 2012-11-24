
var content = new Object();
	
	allAnchors = document.getElementsByTagName("a");

	for ( var i = 0; i<allAnchors.length; i++){
		var lastElem = allAnchors[i].href.split("/");
		if ( lastElem[lastElem.length-1].indexOf('.')!=-1){
			var ext = (lastElem[lastElem.length-1].split('.').pop());

			if ( ext != "html" && ext != "php" ){

				content[allAnchors[i].text] = allAnchors[i].href;

			}
	}
}



chrome.extension.sendMessage({content: content}, function(response) {});