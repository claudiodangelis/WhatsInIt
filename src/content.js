var knownExt = ['gz','tar','zip','deb','pkg','dmg','bz2','exe','msi'];

var list = new Object();
	
	allAnchors = document.getElementsByTagName("a");

	var allDownloads = [];
	for ( var i = 0; i<allAnchors.length; i++){
		var lastElem = allAnchors[i].href.split("/");
		if ( lastElem[lastElem.length-1].indexOf('.')!=-1){
			var ext = (lastElem[lastElem.length-1].split('.').pop());

			if ( knownExt.indexOf(ext) !=-1 ){

				list[allAnchors[i].text] = allAnchors[i].href;

			}
	}
}



console.log(list);
chrome.extension.sendMessage({inner: list}, function(response) {
  console.log(response.farewell);
});


