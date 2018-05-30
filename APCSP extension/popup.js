// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

document.addEventListener('DOMContentLoaded',function(){
	var add = document.getElementById("addItem");
	add.addEventListener("click",function{
		chrome.runtime.sendMessage("prompt");
		addItem();
	});
});
function addItem(){
	var finishedTasks = 0;
  	var table = document.getElementById("insertfirsttable"),
  	for (var r = 0; r < 1; r += 1) {
    	var x = document.getElementById("insertfirsttable").insertRow(r);
    	for (var c = 0; c < 3; c += 1) {
      		var y = x.insertCell(c);
    	}
    	chrome.storage.sync.get('site',function(data){
    		table.rows[r].cells[0].innerHTML = data.site;
    	});
    	var CreateBtn = document.createElement("button");
    	CreateBtn.innerHTML = "Finished Task";
    	CreateBtn.id = "delbtn";
    	table.rows[r].cells[1].appendChild(CreateBtn);
    	var delBtn = document.getElementById("delbtn");
    	CreateBtn.onclick = function delBtn() {
     		if (confirm("Are you sure?")) {        
        		var a = 0;
        		table.deleteRow(a);
        		finishedTasks +=1;
        		console.log(finishedTasks);
      		}
    	};
  	}
}