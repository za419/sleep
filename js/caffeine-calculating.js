var templateContainer=document.getElementById("caffeine-table-template-row-container");
var lastAmount=document.getElementById("caffeine-last-amount");
var lastTime=document.getElementById("caffeine-last-time");
var table=document.getElementById("caffeine-table");

// First, adjust some of the template values. We'll be cloning it later, so any change made to it will carry over.
var now=new Date();
var hour=now.getHours();
if (hour<10)
	hour="0"+hour;
else
	hour=hour.toString();
var minute=now.getMinutes();
if (minute<10)
	minute="0"+minute;
else
	minute=minute.toString();
var elt; // The element we're working with at any given time
elt=templateContainer.querySelector(".caffeine-table-time").firstChild;
elt.max=hour+":"+minute;
if (parseInt(hour)<8)
	elt.value=hour+":"+minute;

// Adds a new row to the table by deep-cloning each child of the template and appending the clones to the table
function addNewRow() {
	var clone;
	for (var i=0; i<templateContainer.children.length; ++i) {
		clone=templateContainer.children[i].cloneNode(true);
		table.appendChild(clone);
	}
}

addNewRow(); // Add the first row to the table

// Does not recompute anything but the amount of the last computed point which is currently left.
// Called once per time period to ensure currentness, and by handleUpdates once it updates the last computed point.
function updateDecay() { 
	
}

function handleUpdates() {
	
}

function updateStrength(e) {
	// First, update the strength shown by the associated input
	var row=e.parentElement.parentElement; // Immediate parent is the cell, grandparent is the row
	var strength=row.querySelector(".caffeine-table-strength").firstElementChild;
	var type=e.value;
	switch (type) {
	case 'coffee':
		strength.value=150;
		strength.disabled=true;
		break
	case 'tea-black':
		strength.value=50;
		strength.disabled=true;
		break
	case 'tea-green':
		strength.value=25;
		strength.disabled=true;
		break
	case 'coke':
		strength.value=35;
		strength.disabled=true;
		break
	case 'input':
		strength.disabled=false;
		break
	default:
		console.log('Unknown caffeine type '+type)
		alert('Error on processing caffeine intake.') // This is very poor error handling. Fix it later
	}
	
	// Now handle updates
	handleUpdates()
}