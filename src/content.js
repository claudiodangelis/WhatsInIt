chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    sendResponse(init());
  });

function init(){


var content = new Object();

	allAnchors = document.getElementsByTagName("a");

	for ( var i = 0; i<allAnchors.length; i++){
		var lastElem = allAnchors[i].href.split("/");
		if ( lastElem[lastElem.length-1].indexOf('.')!=-1){
			var ext = (lastElem[lastElem.length-1].split('.').pop());

			if ( ext != "html" && ext.substring(0,3)!="php" && ext.substring(0,3)!="cgi"){

				content[allAnchors[i].text] = allAnchors[i].href;

			}
	}
}

return content;
}

