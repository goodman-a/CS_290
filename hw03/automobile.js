/* Name: Alexander Goodman
 * Course: OSU CS 290
 * Assignment: HW #03 - Higher Order Exercise
 * Due Date: 15 July 2018
 
 * REFERENCES: 
 * 	1. OSU CS 290 Week 03 Lectures
 *  	2. Eloquent JavaScript Third Edition by Marijn Haverbeke 
*/

function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array ){
  var arrSorted = array.slice();	// array to hold the sorted objects (found slice on w3schools.com)   
  var length = array.length;		// Number of Elements in the array
  var temp;				// placeholder while swapping elements
  // Since we are dealing with a small number of objects, the simple Bubble Sort algorithm will be used
  // 	If the automobiles array held a large number of Automobile objects, then merge sort would be implemented
  for(var i=0; i<length-1; i++){
    for(var j=i+1; j<length; j++){
      // if arrSorted[i] < arrSorted[j] then swap
      if(comparator(arrSorted[j], arrSorted[i])){
	temp = arrSorted[i];
	arrSorted[i] = arrSorted[j];
	arrSorted[j] = temp;
      }
    }
  }
  return arrSorted;
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
  if(auto1.year > auto2.year){
	return true;
  }
  else{
	return false;
  }    

}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
   // Making this case insensitive
  if(auto1.make.toUpperCase() < auto2.make.toUpperCase()){
	return true;
  }
  else{
	return false;
  }
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){

  var typeVal = function(vehicle){
    // Reference: Chapter 2 Eloquent JavaScript Third Edition - Marijn Haverbeke
    switch(vehicle.type.toUpperCase()){
	case "ROADSTER":
	  return 1;
	  break;
	case "PICKUP":
	  return 2;
	  break;
	case "SUV":
	  return 3;
	  break;
	case "WAGON":
	  return 4;
	  break;
	default:
	  return 5;
	  break;
    }
  }

  // Handles cases with same Types
  if(typeVal(auto1) === typeVal(auto2)){
    if(auto1.year > auto2.year){
	return true;
    }
    else{
	return false;
    }
  }
  else if(typeVal(auto1) < typeVal(auto2)){
	return true;
  }
  else{
	return false;
  }


}

/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.

Each line representing a car should be produced via a logMe function. This function should be added to the Automobile class and accept a single boolean argument. If the argument is 'true' then it prints "year make model type" with the year, make, model and type being the values appropriate for the automobile. If the argument is 'false' then the type is ommited and just the "year make model" is logged.
*/

Automobile.prototype.logMe = function(x){
  if(x){
    console.log(this.year + " " + this.make + " " + this.model + " " + this.type);
  }
  else{
    console.log(this.year + " " + this.make + " " + this.model);
  }

};

//Prints the objects to the console.
function display(arr, bool){
  arr.forEach(function(x){
    x.logMe(bool);
  })
}

//display(automobiles, true);

var arrYear = sortArr(yearComparator, automobiles);
var arrMake = sortArr(makeComparator, automobiles);
var arrType = sortArr(typeComparator, automobiles);

console.log("*****");
console.log("The cars sorted by year are: ");
display(arrYear, false);
console.log("\nThe cars sorted by make are: ");
display(arrMake, false);
console.log("\nThe cars sorted by type are: ");
display(arrType, true);
console.log("*****");
/*
*****
The cars sorted by year are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by make are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)

The cars sorted by type are:
(year make model type of the 'greatest' car)
(...)
(year make model type of the 'least' car)
*****

As an example of the content in the parenthesis:
1990 Ford F-150 */
