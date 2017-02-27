var templateContainer=document.getElementById("caffeine-table-template-row-container");
var lastAmount=document.getElementById("caffeine-last-amount");
var lastTime=document.getElementById("caffeine-last-time");
var table=document.getElementById("caffeine-table");
var output=document.getElementById("caffeine-output");

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

// Calculate halflife decay of initial, over elapsed time, with a half-life of halflife.
// Valve pls don't sue me
function halfLife(initial, elapsed, halflife) {
	var coef=0.5;
	coef=Math.pow(coef, elapsed/halflife);
	return initial*coef;
}

// Does not recompute anything but the amount of the last computed point which is currently left.
// Called once per time period to ensure currentness, and by handleUpdates once it updates the last computed point.
function updateDecay() { 
	var now=new Date().getTime();
	var elapsedTime=now-parseInt(lastTime.value);
	elapsedTime/=(1000*60*60); // To get hours
	
	var result=parseFloat(lastAmount.value);
	result=halfLife(result, elapsedTime, 6); // Important note: Half life of caffeine in the human body is about 6 hours.
	
	output.innerHTML=result.toLocaleString();
}

setInterval(updateDecay, 1000); // Update decay once per second. Probably way too often, but y'know

function handleUpdates() {
	var rows=table.getElementsByTagName("tr");
	
	var amount=0; // Last amount
	var time; // Last dose taken
	// Special handling of first row
	var doses=rows[0].querySelector(".caffeine-table-dose").firstElementChild;
	var strength=rows[0].querySelector(".caffeine-table-strength").firstElementChild;
	var intake=rows[0].querySelector(".caffeine-table-time").firstElementChild;
	time=new Date();
	time.setHours(parseInt(intake.value));
	time.setMinutes(parseInt(intake.value.substr(intake.value.indexOf(":")+1)));
	time.setSeconds(0);
	time.setMilliseconds(0);
	amount=doses.value*strength.value;
	
	// Iterate over all other rows
	for (var i=1; i<rows.length; ++i) {
		// Get this row's relevant elements
		var doses=rows[i].querySelector(".caffeine-table-dose").firstElementChild;
		var strength=rows[i].querySelector(".caffeine-table-strength").firstElementChild;
		var intake=rows[i].querySelector(".caffeine-table-time").firstElementChild;

		// Now calculate current caffeine: The intake at this row, plus what's left from the last current
		var current=doses.value*strength.value;
		var now=new Date();
		now.setHours(parseInt(intake.value));
		now.setMinutes(parseInt(intake.value.substr(intake.value.indexOf(":")+1)));
		now.setSeconds(0);
		now.setMilliseconds(0);
		var elapsedTime=now.getTime()-time.getTime();
		elapsedTime/=(1000*60*60); // To get hours
		current+=halfLife(amount, elapsedTime, 6); // Important note: Half life of caffeine in the human body is about 6 hours.

		// Update the accumulators
		time=now;
		amount=current;
	}
	
	// We're done: Update the in-page trackers of last dose and time
	lastAmount.value=amount;
	lastTime.value=time.getTime();
	
	// And, finally, force a decay update to update the display
	updateDecay();
}

handleUpdates(); // Update with first row only

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