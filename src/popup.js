chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendMessage(tab.id, {action: "get_content"}, function(content) {
    showContent(content);
  });
});

var input = document.getElementById("filter");
  input.onkeydown = (function(){
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.sendMessage(tab.id, {action: "get_content"}, function(content) {
        filter(content,input);
      });
    });
});

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
  document.getElementById("content").innerHTML = "<p>Nothing to show.</p>"
}
}

function download(url){
  chrome.tabs.create({'url': url}, function(tab) {});}

function filter(content){

  var filteredContent = new Object();
  filteredContent['null'] = true;

  for ( var key in content ){
    if ( key != 'null'){
      if (key.toLowerCase().indexOf(input.value.toLowerCase())!=-1 || content[key][0].toLowerCase().indexOf(input.value.toLowerCase()) != -1 ){
        filteredContent[key]=[content[key][0],content[key][1]];
        filteredContent['null']=false;
      }
    }
  }
  document.getElementById("content").innerHTML="";
  showContent(filteredContent);
}