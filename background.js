chrome.browserAction.onClicked.addListener(function(tab){
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    file: 'content_script.js'
  });
});