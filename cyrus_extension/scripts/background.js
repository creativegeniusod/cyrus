'use strict';

chrome.runtime.onInstalled.addListener(function() {
  	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'www.google.com', schemes: ['https'] },
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
});
var socket = io.connect('http://localhost:3002');
socket.on('connect', socket => {
    console.log('connect');
});

socket.on('return_message', function (msg) {
    console.log(msg);
})
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.message == 'sendmessage'){
        socket.emit ('message', request.messageDetails);
    }
	
    
});