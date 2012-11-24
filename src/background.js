var content = [];

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	content = request.content;
  });

function getContent(){

    return content;
}

