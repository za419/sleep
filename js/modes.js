// Modal slider handling
var morningModeTime = "8:30 AM";
var afternoonModeTime = "8:30 AM";
var customizedModeTime = "8:30 AM";
var mondayMode = "Morning Class Mode";
var tuesdayMode = "Morning Class Mode";
var wednesdayMode = "Morning Class Mode";
var thursdayMode = "Morning Class Mode";
var fridayMode = "Morning Class Mode";
var saturdayMode = "Holiday Mode";
var sundayMode = "Holiday Mode";

// localStorage.setItem("morningTime", morningModeTime);
// localStorage.setItem("afternoonTime", afternoonModeTime);
// localStorage.setItem("Monday", mondayMode);
// localStorage.setItem("Tuesday", tuesdayMode);
// localStorage.setItem("Wednesday", wednesdayMode);
// localStorage.setItem("Thursday", thursdayMode);
// localStorage.setItem("Friday", fridayMode);
// localStorage.setItem("Saturday", saturdayMode);
// localStorage.setItem("Sunday", sundayMode);

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
	if(ID === 'modal-body-time-output-1'){
		morningModeTime = hour + ":" + ((minute<10) ? "0" : "") + minute + suffix
		localStorage.setItem("morningTime", morningModeTime);
		console.log(morningModeTime);
	}
	else if(ID === 'modal-body-time-output-2'){
		afternoonModeTime = hour + ":" + ((minute<10) ? "0" : "") + minute + suffix
		localStorage.setItem("afternoonTime", afternoonModeTime);
		console.log(afternoonModeTime);
	}
	else if(ID === 'modal-body-time-output-3'){
		customizedModeTime = hour + ":" + ((minute<10) ? "0" : "") + minute + suffix
		localStorage.setItem("customizedTime", customizedModeTime);
		console.log(customizedModeTime);

	}

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


function check(mode){ 
	if(mode === 'afternoon'){
		var afternoon = document.querySelectorAll(".afternoonCheck");
			for (var i = 0; i < afternoon.length; i++) {
				if(afternoon[i].checked){
					switch(i){
						case 0:
							mondayMode = "Afternoon Class Mode";
							//localStorage.setItem("Monday", mondayMode);
							localStorage.setItem("Monday", mondayMode);
							break;
						case 1:
							tuesdayMode = "Afternoon Class Mode";
							localStorage.setItem("Tuesday", tuesdayMode);
							break;
						case 2:
							wednesdayMode = "Afternoon Class Mode";
							localStorage.setItem("Wednesday", wednesdayMode);
							break;
						case 3:
							thursdayMode = "Afternoon Class Mode";
							localStorage.setItem("Thursday", thursdayMode);
							break;
						case 4:
							fridayMode = "Afternoon Class Mode";
							localStorage.setItem("Friday", fridayMode);
							break;
						case 5:
							saturdayMode = "Afternoon Class Mode";
							localStorage.setItem("Saturday", saturdayMode);
							break;
						case 6:
							sundayMode = "Afternoon Class Mode";
							localStorage.setItem("Sunday", sundayMode);
							break;
					}

				}
			}
	}

	else if(mode === 'morning'){
		var morning = document.querySelectorAll(".morningCheck");
			for (var i = 0; i < morning.length; i++) {
				if(morning[i].checked)
					switch(i){
						case 0:
							mondayMode = "Morning Class Mode";
							localStorage.setItem("Monday", mondayMode);
							break;
						case 1:
							tuesdayMode = "Morning Class Mode";
							localStorage.setItem("Tuesday", tuesdayMode);
							break;
						case 2:
							wednesdayMode = "Morning Class Mode";
							localStorage.setItem("Wednesday", wednesdayMode);
							break;
						case 3:
							thursdayMode = "Morning Class Mode";
							localStorage.setItem("Thursday", thursdayMode);
							break;
						case 4:
							fridayMode = "Morning Class Mode";
							localStorage.setItem("Friday", fridayMode);
							break;
						case 5:
							saturdayMode = "Morning Class Mode";
							localStorage.setItem("Saturday", saturdayMode);
							break;
						case 6:
							sundayMode = "Morning Class Mode";
							localStorage.setItem("Sunday", sundayMode);
							break;
					}
			}
	}

	else if(mode === 'holiday'){
		var holiday = document.querySelectorAll(".holidayCheck");
			for (var i = 0; i < holiday.length; i++) {
				if(holiday[i].checked)
					switch(i){
						case 0:
							mondayMode = "Holiday Mode";
							localStorage.setItem("Monday", mondayMode);
							break;
						case 1:
							tuesdayMode = "Holiday Mode";
							localStorage.setItem("Tuesday", tuesdayMode);
							break;
						case 2:
							wednesdayMode = "Holiday Mode";
							localStorage.setItem("Wednesday", wednesdayMode);
							break;
						case 3:
							thursdayMode = "Holiday Mode";
							localStorage.setItem("Thursday", thursdayMode);
							break;
						case 4:
							fridayMode = "Holiday Mode";
							localStorage.setItem("Friday", fridayMode);
							break;
						case 5:
							saturdayMode = "Holiday Mode";
							localStorage.setItem("Saturday", saturdayMode);
							break;
						case 6:
							sundayMode = "Holiday Mode";
							localStorage.setItem("Sunday", sundayMode);
							break;
					}
			}
	}

	else if(mode === 'customize'){
		var customize = document.querySelectorAll(".customizeCheck");
			for (var i = 0; i < customize.length; i++) {
				if(customize[i].checked)
					switch(i){
						case 0:
							mondayMode = "Customize Mode";
							localStorage.setItem("Monday", mondayMode);
							break;
						case 1:
							tuesdayMode = "Customize Mode";
							localStorage.setItem("Tuesday", tuesdayMode);
							break;
						case 2:
							wednesdayMode = "Customize Mode";
							localStorage.setItem("Wednesday", wednesdayMode);
							break;
						case 3:
							thursdayMode = "Customize Mode";
							localStorage.setItem("Thursday", thursdayMode);
							break;
						case 4:
							fridayMode = "Customize Mode";
							localStorage.setItem("Friday", fridayMode);
							break;
						case 5:
							saturdayMode = "Customize Mode";
							localStorage.setItem("Saturday", saturdayMode);
							break;
						case 6:
							sundayMode = "Customize Mode";
							localStorage.setItem("Sunday", sundayMode);
							break;
					}
			}

	}
	
} 

