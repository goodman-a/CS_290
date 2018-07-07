/* Name: Alexander Goodman
 * Course: OSU CS 290
 * Assignment: activity04 - Fixing Closure Loop
 * Due Date: 15 July 2018
 
 * REFERENCES: 
 * 	1. OSU CS 290 Week 03 Lectures
*/

function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
	  (function (x){
		var item = 'item' + list[x];
        result.push( function(){
        alert(item + ' ' + list[x])} );
	  })(i);
  }
    return result;
}
 
function testList() {
    var fnlist = buildList([1,2,3]);
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

testList();