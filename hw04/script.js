/*
 * Name: Alexander Goodman
 * Assignment: HW04 - DOM and Events
 * Due Date: 22 July 2018
 * REFERNCES: 
 *		1. developer.mozilla.org
 *		2. Eloquent JaveScript by Marijn Haverbeke
 *		3. w3schools.com
*/

// Creating the 4x4 table
function newTable(){

	// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
	var body = document.getElementsByTagName("body")[0];

	// Create table, thead, and tbody elements
	var table = document.createElement("table");
	table.id = "table";
	var tableHead = document.createElement("thead");
	var tableBody = document.createElement("tbody");
	tableBody.id = "tbody";

	// Create the Headers
	var rowHdr = document.createElement("tr");
	for(var i=0; i<4; i++){
		var hdr = document.createElement("th");
		var hdrText = document.createTextNode("Header " + (i+1));
		hdr.appendChild(hdrText);
		rowHdr.appendChild(hdr);
	}
	// Add to the table head (thead)
	tableHead.appendChild(rowHdr);

	// Create the data cells
	for(var i=1; i<4; i++){
		var row = document.createElement("tr");
		for(var j=1; j<5; j++){
			var data = document.createElement("td");
			data.id = i+","+j;  //setting id for each cell (row, col)
			var dataText = document.createTextNode(i+","+j);
			data.appendChild(dataText);
			row.appendChild(data);
		}
		// Add to the table body (tbdody)
		tableBody.appendChild(row);
	}

	table.appendChild(tableHead);
	table.appendChild(tableBody);
	body.appendChild(table);
	// Give the table a border with width 1
	table.setAttribute("border", 1);
}

// Creating the 4 buttons
var body = document.getElementsByTagName("body")[0];

function multiDirButtons(){
	// Up Button
	var buttonUp = document.createElement("button");
	buttonUp.id = "up";
	buttonUp.textContent = "UP";
	body.appendChild(buttonUp);
	
	// Down Button
	var buttonDown = document.createElement("button");
	buttonDown.id = "down";
	buttonDown.textContent = "DOWN";
	body.appendChild(buttonDown);
	
	// Left Button
	var buttonLeft = document.createElement("button");
	buttonLeft.id = "left";
	buttonLeft.textContent = "LEFT";
	body.appendChild(buttonLeft);

	// Right Button
	var buttonRight = document.createElement("button");
	buttonRight.id = "right";
	buttonRight.textContent = "RIGHT";
	body.appendChild(buttonRight);
	
	// Mark Button
	var buttonMark = document.createElement("button");
	buttonMark.id = "mark";
	buttonMark.textContent = "Mark Cell";
	body.appendChild(buttonMark);

}

/* -- CREATE THE TABLE --*/
newTable();


// REFERENCES:
//		1. https://www.w3schools.com/jsref/coll_tr_cells.asp
//		2. https://www.w3schools.com/jsref/prop_node_parentelement.asp

/* NOTE: Could save execution time by creating 4 separate directional functions,
	but the program does not run slow and is not needed at this time.
*/
function selectedCell(){
	// holds the current row and column indices
	//var rowNum = curCell.parentElement.rowIndex;
	var rowNum = document.getElementById("selected").parentElement.rowIndex;
	var colNum = curCell.cellIndex;
		// console.log("Row: ", rowNum, "Col: ", colNum);  // for debugging.

	// Up Button - checks that the current cell is not in the first row before executing
	if(this.id === "up" && rowNum != 1){
		// Set the current element to the default border values and remove the selected tag
		curCell = document.getElementById("table").rows[rowNum].cells[colNum];
		curCell.style.border = "1px solid black";
		curCell.removeAttribute("id");

		// Go to the row below in the same column and make this the current cell by 
		//		changing the border and giving it the selected tag (which will 
		//		change color when mark cell is pressed)
		curCell = document.getElementById("table").rows[rowNum-1].cells[colNum];		
		curCell.style.border = "2px solid black";
		curCell.id = "selected";
	}

	// Down Button - checks that the current cell is not in the last row before executing
	else if(this.id == "down" && rowNum != 3){
		curCell = document.getElementById("table").rows[rowNum].cells[colNum];
		curCell.style.border = "1px solid black";
		curCell.removeAttribute("id");

		// Select the cell in the row above
		curCell = document.getElementById("table").rows[rowNum+1].cells[colNum];		
		curCell.style.border = "2px solid black";
		curCell.id = "selected";
	}

	// Left Button - checks that the current cell is not in the first column before executing
	else if(this.id == "left" && curCell.cellIndex != 0){
		curCell = document.getElementById("table").rows[rowNum].cells[colNum];
		curCell.style.border = "1px solid black";
		curCell.removeAttribute("id");

		// select the cell to the left (or the previous element that was created)
		curCell = curCell.previousElementSibling;
		curCell.style.border = "2px solid black";
		curCell.id = "selected"; 

	}

	// Right Button - checks that the current cell is not in the last column before executing
	else if(this.id == "right" && curCell.cellIndex != 3){
		curCell = document.getElementById("table").rows[rowNum].cells[colNum];
		curCell.style.border = "1px solid black";
		curCell.removeAttribute("id");

		// Select the cell to the right (or the next element that was created)
		curCell = curCell.nextElementSibling;
		curCell.style.border = "2px solid black";
		curCell.id = "selected"; 
	}

}

// Changes the background of the selected cell to yellow
function markCell(){
	document.getElementById("selected").style.backgroundColor = "yellow";
}

/*-- CREATE THE BUTTONS --*/
multiDirButtons();


// Default Criteria: upper left, non-header cell of table is selected
var curCell = document.getElementsByTagName("td")[0];
	//console.log("current cell is: " + typeof curCell); for debugging
curCell.id = "selected"
curCell.style.border = "2px solid";

// Events that will be called if the chosen button is selected.
document.getElementById("up").addEventListener("click",selectedCell);
document.getElementById("down").addEventListener("click",selectedCell);
document.getElementById("left").addEventListener("click",selectedCell);
document.getElementById("right").addEventListener("click",selectedCell);
document.getElementById("mark").addEventListener("click",markCell);


