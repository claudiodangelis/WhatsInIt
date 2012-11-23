var inner = [];

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	inner = request.inner;
  });

function buildTable(){
		var content = "";
		for ( var key in inner){
			content = content+ '<p><a href=\"'+inner[key]+'\">'+ key+'</a></p>';
		}

    return content;
}