chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendMessage(tab.id, {action: "get_content"}, function(content) {
    showContent(content);
  });
});

function XshowContent(content){

if ( content['null'] == false ){
	
	for ( var key in content ){
		if( key != 'null' ){
			element = document.createElement("a");
			element.href=content[key][0];
			element.innerHTML=key;
			element.onclick = (function(url) {
				return function(){
					download(url);
				};
			})(content[key][0]);

			document.getElementById("content").appendChild(element);
		}

	}
	
} else {
	document.getElementById("content").innerHTML = "Nothing to show."
}
}

function showContent(content){
	if (!content['null']){
		for ( var key in content){
			if ( key != 'null'){
				// Create div
				div = document.createElement("div");
				div.setAttribute("class","resultBox");

				// Create <p> title
				p = document.createElement("p");
				p.innerHTML = content[key][1];

				element = document.createElement("a");
				element.href=content[key][0];
				element.innerHTML=key;
				element.onclick = (function(url) {
					return function(){
						download(url);
						};
					})(content[key][0]);

				div.appendChild(p);
				div.appendChild(element);
				document.getElementById("content").appendChild(div);

			}
		}
	}
	 else {
	document.getElementById("content").innerHTML = "Nothing to show."
}
}

function download(url){
	chrome.tabs.create({'url': url}, function(tab) {});}