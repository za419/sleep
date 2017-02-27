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

// Now, add onchange listeners

var elts=templateContainer.querySelectorAll("select,input");
for (var i=0; i<elts.length; ++i)
	elts[i].onchange=handleUpdates();

// Adds a new row to the table by deep-cloning each child of the template and appending the clones to the table
function addNewRow() {
	var clone;
	for (var i=0; i<templateContainer.children.length; ++i) {
		clone=templateContainer.children[i].cloneNode(true);
		table.appendChild(clone);
	}
}