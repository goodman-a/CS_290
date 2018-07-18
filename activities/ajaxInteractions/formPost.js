/*
 * Name: Alexander Goodman
 * Assignment: Activity - Ajax Interactions
 * Due Date: 22 July 2018
 *
 * REFERENCES:
 		1. Eloquent JavaScript by Marijn Haverbeke
 		2. OSU CS 290 Week 04 Lectures
 */
 
// REFERNECE: OSU CS 290 Week 04 Lectures
document.addEventListener("DOMContentLoaded", formPost);

function formPost(){
	document.getElementById("formSubmit").addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var site = "http://httpbin.org/post";
		var payload = {	"userName": null,
						"age": null,
						"holiday": null
		};		
		payload.userName = document.getElementById("userName").value;
		payload.age = document.getElementById("age").value;
		payload.holiday = document.getElementById("holiday").value;
		req.open("POST", site, true);
		req.setRequestHeader("Content-Type", "application/json");
		req.addEventListener("load", function(){
			if(req.status >= 200 && req.status < 400){
				var response = JSON.parse(JSON.parse(req.responseText).data)
				//console.log(JSON.parse(JSON.parse(req.responseText).data));
				//console.log(JSON.parse(req.responseText));
				document.getElementById("nameResponse").textContent = response.userName;
				document.getElementById("ageResponse").textContent = response.age;
				document.getElementById("holidayResponse").textContent = response.holiday;
			}
			else{
				console.log("Error in network request: " + req.statusText);
			}
		});
		req.send(JSON.stringify(payload));
		event.preventDefault();
	});
}




	