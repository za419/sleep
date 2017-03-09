function updateSummary(){
	var morningModeTime = localStorage.getItem("morningTime");
	var afternoonModeTime = localStorage.getItem("afternoonTime");

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

	if(tuesday === "Morning Class Mode")
		document.getElementById("tuesday_alarm").innerHTML = morningModeTime + " - " + tuesday;
	else if(tuesday === "Afternoon Class Mode")
		document.getElementById("tuesday_alarm").innerHTML = afternoonModeTime + " - " + tuesday;

	if(wednesday === "Morning Class Mode")
		document.getElementById("wednesday_alarm").innerHTML = morningModeTime + " - " + wednesday;
	else if(wednesday === "Afternoon Class Mode")
		document.getElementById("wednesday_alarm").innerHTML = afternoonModeTime + " - " + wednesday;

	if(thursday === "Morning Class Mode")
		document.getElementById("thursday_alarm").innerHTML = morningModeTime + " - " + thursday;
	else if(thursday === "Afternoon Class Mode")
		document.getElementById("thursday_alarm").innerHTML = afternoonModeTime + " - " + thursday;

	if(friday === "Morning Class Mode")
		document.getElementById("friday_alarm").innerHTML = morningModeTime + " - " + friday;
	else if(friday === "Afternoon Class Mode")
		document.getElementById("friday_alarm").innerHTML = afternoonModeTime + " - " + friday;

	if(saturday === "Morning Class Mode")
		document.getElementById("saturday_alarm").innerHTML = morningModeTime + " - " + saturday;
	else if(saturday === "Afternoon Class Mode")
		document.getElementById("saturday_alarm").innerHTML = afternoonModeTime + " - " + saturday;

	if(sunday === "Morning Class Mode")
		document.getElementById("sunday_alarm").innerHTML = morningModeTime + " - " + sunday;
	else if(sunday === "Afternoon Class Mode")
		document.getElementById("sunday_alarm").innerHTML = afternoonModeTime + " - " + sunday;

	localStorage.clear();
}