
function updateSummary(){
	var morningModeTime = localStorage.getItem("morningTime");
	var afternoonModeTime = localStorage.getItem("afternoonTime");
	var customizedModeTime = localStorage.getItem("customizedTime");

	var monday = localStorage.getItem("Monday");
	//console.log(morningModeTime + "   " + monday);
	var tuesday = localStorage.getItem("Tuesday");
	var wednesday = localStorage.getItem("Wednesday");
	var thursday = localStorage.getItem("Thursday");
	var friday = localStorage.getItem("Friday");
	var saturday = localStorage.getItem("Saturday");
	var sunday = localStorage.getItem("Sunday");

	if(monday === "Morning Class Mode")
		document.getElementById("monday_alarm").innerHTML = morningModeTime + " - " + monday;
	else if(monday === "Afternoon Class Mode")
		document.getElementById("monday_alarm").innerHTML = afternoonModeTime + " - " + monday;
	else if(monday === "Holiday Mode")
		document.getElementById("monday_alarm").innerHTML = "No Alarm - " + monday;
	else if(monday === "Customize Mode")
		document.getElementById("monday_alarm").innerHTML = customizedModeTime + " - " + monday;

	if(tuesday === "Morning Class Mode")
		document.getElementById("tuesday_alarm").innerHTML = morningModeTime + " - " + tuesday;
	else if(tuesday === "Afternoon Class Mode")
		document.getElementById("tuesday_alarm").innerHTML = afternoonModeTime + " - " + tuesday;
	else if(tuesday === "Holiday Mode")
		document.getElementById("tuesday_alarm").innerHTML = "No Alarm - " + tuesday;
	else if(tuesday === "Customize Mode")
		document.getElementById("tuesday_alarm").innerHTML = customizedModeTime + " - " + tuesday;

	if(wednesday === "Morning Class Mode")
		document.getElementById("wednesday_alarm").innerHTML = morningModeTime + " - " + wednesday;
	else if(wednesday === "Afternoon Class Mode")
		document.getElementById("wednesday_alarm").innerHTML = afternoonModeTime + " - " + wednesday;
	else if(wednesday === "Holiday Mode")
		document.getElementById("wednesday_alarm").innerHTML = "No Alarm - " + wednesday;
	else if(wednesday === "Customize Mode")
		document.getElementById("wednesday_alarm").innerHTML = customizedModeTime + " - " + wednesday;

	if(thursday === "Morning Class Mode")
		document.getElementById("thursday_alarm").innerHTML = morningModeTime + " - " + thursday;
	else if(thursday === "Afternoon Class Mode")
		document.getElementById("thursday_alarm").innerHTML = afternoonModeTime + " - " + thursday;
	else if(thursday === "Holiday Mode")
		document.getElementById("thursday_alarm").innerHTML = "No Alarm - " + thursday;
	else if(thursday === "Customize Mode")
		document.getElementById("thursday_alarm").innerHTML = customizedModeTime + " - " + thursday;

	if(friday === "Morning Class Mode")
		document.getElementById("friday_alarm").innerHTML = morningModeTime + " - " + friday;
	else if(friday === "Afternoon Class Mode")
		document.getElementById("friday_alarm").innerHTML = afternoonModeTime + " - " + friday;
	else if(friday === "Holiday Mode")
		document.getElementById("friday_alarm").innerHTML = "No Alarm - " + friday;
	else if(friday === "Customize Mode")
		document.getElementById("friday_alarm").innerHTML = customizedModeTime + " - " + friday;

	if(saturday === "Morning Class Mode")
		document.getElementById("saturday_alarm").innerHTML = morningModeTime + " - " + saturday;
	else if(saturday === "Afternoon Class Mode")
		document.getElementById("saturday_alarm").innerHTML = afternoonModeTime + " - " + saturday;
	else if(saturday === "Holiday Mode")
		document.getElementById("saturday_alarm").innerHTML = "No Alarm - " + saturday;
	else if(saturday === "Customize Mode")
		document.getElementById("saturday_alarm").innerHTML = customizedModeTime + " - " + saturday;

	if(sunday === "Morning Class Mode")
		document.getElementById("sunday_alarm").innerHTML = morningModeTime + " - " + sunday;
	else if(sunday === "Afternoon Class Mode")
		document.getElementById("sunday_alarm").innerHTML = afternoonModeTime + " - " + sunday;
	else if(sunday === "Holiday Mode")
		document.getElementById("sunday_alarm").innerHTML = "No Alarm - " + sunday;
	else if(sunday === "Customize Mode")
		document.getElementById("sunday_alarm").innerHTML = customizedModeTime + " - " + sunday;

	localStorage.clear();
}


document.onload = updateSummary();