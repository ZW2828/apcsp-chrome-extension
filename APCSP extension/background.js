// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: ["*://www.reddit.com/*","*://www.facebook.com/*"]},
    ["blocking"]);

  chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });

chrome.runtime.onMessage.addListener(function(message, callback){
	if(message=="prompt"){
		site = prompt("What website do you want to block"),
    	date = prompt("Date the task is due. dd/mm/yyyy");
    	chrome.storage.sync.set({website: site},function(){
    		console.log('website is ' + site);
    	});
	}
});