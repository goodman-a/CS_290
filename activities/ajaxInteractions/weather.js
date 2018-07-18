/*
 * Name: Alexander Goodman
 * Assignment: Activity - Ajax Interactions
 * Due Date: 22 July 2018
 *
 * REFERENCES:
 		1. Eloquent JavaScript by Marijn
 		2. OSU CS 290 Week 04 Lectures
 		3. https://www.w3schools.com/jsref/met_element_addeventlistener.asp
 */
// REFERNECE: OSU CS 290 Week 04 Lectures


 var apiKey = '17d8bc906d3b9f9bbfe850af9a2c8f6f';
 document.addEventListener('DOMContentLoaded', weather);

// checks to see what button was pressed and then sends the user input to the get request function.
function weather(){
	// If user submitted the City Name
	document.getElementById("citySubmit").addEventListener("click", function(e){
		var city = document.getElementById("city").value;
		var userInput = "q="+city;
		weatherCity(e, userInput);
	});

	// If user submitted the Zip Code
	document.getElementById("zipSubmit").addEventListener("click", function(e){
		var zip = document.getElementById("zip").value;
		var userInput = "zip="+zip;
		weatherCity(e, userInput);
	});
}

 function weatherCity(event, userInput){
 	var req = new XMLHttpRequest();
	req.open("GET", "http://api.openweathermap.org/data/2.5/weather?"+ userInput +"&appid="+ apiKey+"&units=imperial", true);
	req.addEventListener('load', function(){
		if(req.status >= 200 && req.status <400){
			var response = JSON.parse(req.responseText);
			weatherData(response);
		}
		else{
			console.log("Error in network request: " + req.statusText);
		}

	});
	req.send(null);
	event.preventDefault();
};

// gets the api data back from openweathermap
function weatherData(response){
			document.getElementById("cityName").textContent = response.name;
			document.getElementById("cityTemp").textContent = response.main.temp;
			document.getElementById("cityHum").textContent = response.main.humidity;
			document.getElementById("cityWind").textContent = response.wind.speed;	
			document.getElementById("cityDt").textContent = response.dt;
			document.getElementById("sunrise").textContent = response.sys.sunrise;
			document.getElementById("sunset").textContent = response.sys.sunset;			

};
