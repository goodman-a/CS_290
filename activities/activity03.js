/* Name: Alexander Goodman
 * Course: OSU CS 290
 * Assignment: activity03

 * REFERENCES: 
 * 	1. Eloquent Javascript by Merijn Haverbeke
 * 		Chapter 04 Problem Hints & Code Examples 
 
*/

function deepEqual(objx, objy){
  // strict equality: type and value are the same.
  // Will make the function work for non-object comparisons as well.
  // checks the value from the recursive call.
  if(objx === objy){
    return true;
  }

  // Checks to see if the input is an object and not a null
  else if(objx == "object" || objy == "object" || objx != null || objy != null)
  {
    let keysX = Object.keys(objx);
  	let keysY = Object.keys(objy);
	
	// verifying that the keys are the same length
    if(keysX.length != keysY.length) return false;
    
	// Arrays have a boolean method called includes (from Ch.4 Eloquent JavaScript)
  /* Check to see if each key in objx is in objy. When keys match up, recursively
       call the function to verify the values are the same (===) or if another object
       appears then it will deep dive into it. If it is true, then the for loop will continue
       to check the next iteration of the keysX array. If it is false, then the function 
       will return false.
  */
    for(let key of keysX){
	  // if key from objx is found in objy recursively call function to either compare value
      //   or if that object holds another object, then it will need to deep dive that object also.	
      if(keysY.includes(key)){
        if(!deepEqual(objx[key], objy[key]))
      	  return false;
      }
	  // if key from objx is not included in objy, return false.
      else{return false;}
    }
    return true;
  }
  
  // Return False if the inputs are not equal to each other, null values, and or non-objects
  else{
    return false;
  }

}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true