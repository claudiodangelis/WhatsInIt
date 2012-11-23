var inner = [];

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	inner = request.inner;
  });

function getContent(){

    return inner;
}