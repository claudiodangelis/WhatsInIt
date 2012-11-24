chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(content) {
    showContent(content);
  });
});

function showContent(content){

if ( content != null ){
	
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
	
} else {
	document.getElementById("content").innerHTML = "There's nothing I can show."
}
}

function download(url){
	chrome.tabs.create({'url': url}, function(tab) {});}