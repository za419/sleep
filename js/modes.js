// Modal slider handling
function timeUpdate(time, ID) {
	var hour=Math.floor(time)
	var minute=Math.floor(60*(time-hour))
	var suffix=" AM"
	if (hour>=12) {
		suffix=" PM"
		if (hour>12)
			hour-=12
	}	
	document.getElementById(ID).innerHTML=hour + ":" + ((minute<10) ? "0" : "") + minute + suffix
}

function updateTimeSlider(wrapper) {
	var width=wrapper.offsetWidth;
	var slider=wrapper.querySelector('#modal-body-time')
	var childWidth=0;
	for (var i=0; i<wrapper.children.length; ++i) 
		childWidth+=wrapper.children[i].clientWidth
	var widthRemaining=width-childWidth-100; // With a margin to spare
	width=slider.clientWidth
	slider.style.width=(width+widthRemaining)+"px"
}

// Modal box handling

// Get the modalOne
var modalOne = document.getElementById('myModalOne');

// Get the area that opens the modal
var triggerOne = document.getElementsByClassName("mode")[0];

// Get the <span> element that closes the modal
var spanOne = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
triggerOne.onclick = function() {
    modalOne.style.display = "block";
	
	updateTimeSlider(modalOne.querySelector(".time-slider-wrapper"));
	
	document.body.onresize=function()
	{
		updateTimeSlider(modalOne.querySelector(".time-slider-wrapper"))
	}
}

// When the user clicks on <span> (x), close the modal
spanOne.onclick = function() {
    modalOne.style.display = "none";
}

// Get the modalTwo
var modalTwo = document.getElementById('myModalTwo');

// Get the area that opens the modal
var triggerTwo = document.getElementsByClassName("mode")[1];

// Get the <span> element that closes the modal
var spanTwo = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
triggerTwo.onclick = function() {
    modalTwo.style.display = "block";
	
	updateTimeSlider(modalTwo.querySelector(".time-slider-wrapper"));
	
	document.body.onresize=function()
	{
		updateTimeSlider(modalTwo.querySelector(".time-slider-wrapper"))
	}
}

// When the user clicks on <span> (x), close the modal
spanTwo.onclick = function() {
    modalTwo.style.display = "none";
}


// Get the modalThree
var modalThree = document.getElementById('myModalThree');

// Get the area that opens the modal
var triggerThree = document.getElementsByClassName("mode")[2];

// Get the <span> element that closes the modal
var spanThree = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
triggerThree.onclick = function() {
    modalThree.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanThree.onclick = function() {
    modalThree.style.display = "none";
}

// Get the modalFour
var modalFour = document.getElementById('myModalFour');

// Get the area that opens the modal
var triggerFour = document.getElementsByClassName("mode")[3];

// Get the <span> element that closes the modal
var spanFour = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal 
triggerFour.onclick = function() {
    modalFour.style.display = "block";
	
	updateTimeSlider(modalFour.querySelector(".time-slider-wrapper"));
	
	document.body.onresize=function()
	{
		updateTimeSlider(modalFour.querySelector(".time-slider-wrapper"))
	}
}

// When the user clicks on <span> (x), close the modal
spanFour.onclick = function() {
    modalFour.style.display = "none";
}




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {	
    if (event.target == modalOne || event.target == modalTwo ||event.target == modalThree ||event.target == modalFour) {
        event.target.style.display = "none";
    }
}
