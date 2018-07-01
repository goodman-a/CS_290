// Name: Alexander Goodman
// Course: OSU CS 290
// Assignment: Activity 02 - JavaScript Functions

// Part 1 - Prove Hoisting does occur for this function call syntax
console.log(square(2));

function square(x){
  return x*x;
}


// Part 2 - Prove Hoisting does not occur for this function call syntax

//console.log(hello("Hi There"));
var hello = function(x){
  return x;
}


console.log(hello("Hi There"));



