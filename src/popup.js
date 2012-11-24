chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendMessage(tab.id, {action: "get_content"}, function(content) {
    showContent(content);
  });
});

function showContent(content){

if ( content['null'] == false ){
	
	for ( var key in content ){
		if( key != 'null' ){
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
	
} else {
	document.getElementById("content").innerHTML = "Nothing to show."
}
}

function download(url){
	chrome.tabs.create({'url': url}, function(tab) {});}