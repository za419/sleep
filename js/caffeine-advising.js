document.getElementById('caffeine-quantity').onchange=function()
{
	var goal=65 // Magic number; Will become non-magic (fetched) later
	var halfLife=6 // Magic number; Upper bound on human caffeine halflife
	
	var count=parseInt(document.getElementById('caffeine-quantity').value)
	var type=document.getElementById('caffeine-type').value
	var timingElement=document.getElementById('caffeine-time')
	
	var timing=0
	var initial
	switch (type) {
	case 'coffee':
		initial=150
		break
	case 'tea-black':
		initial=50
		break
	case 'tea-green':
		initial=25
		break
	case 'coke':
		initial=35
		break
	default:
		console.log('Unknown caffeine type '+type)
		alert('Error on processing caffeine intake.') // This is very poor error handling. Fix it later
	}
	initial*=count
	
	timing=goal/initial
	timing=Math.log(timing)/Math.log(0.5)
	timing*=halfLife
	
	// Round to nearest half-hour
	timing*=2
	timing=Math.round(timing)
	timing/=2
	
	timingElement.value=timing
}

document.getElementById('caffeine-type').onchange=function()
{
	var type=document.getElementById('caffeine-type').value
	var elt=document.getElementById('caffeine-units')
	
	switch (type) // Manages switching of unit type
	{
	case 'coke':
		elt.innerHTML="can(s)"
		break
	case 'coffee':
	case 'tea-black':
	case 'tea-green':
	default:
		elt.innerHTML="cup(s)"
	}
	
	// Then call the caffeine-quantity handler
	(document.getElementById('caffeine-quantity').onchange)() // Disgustingly valid syntax
}

document.getElementById('caffeine-time').onchange=function()
{
	var goal=65 // Magic number; Will become non-magic (fetched) later
	var halfLife=6 // Magic number; Upper bound on human caffeine halflife
	
	var countElement=document.getElementById('caffeine-quantity')
	var type=document.getElementById('caffeine-type').value
	var timing=parseFloat(document.getElementById('caffeine-time').value)
	
	var count=0
	var initial
	switch (type) {
	case 'coffee':
		initial=150
		break
	case 'tea-black':
		initial=50
		break
	case 'tea-green':
		initial=25
		break
	case 'coke':
		initial=35
		break
	default:
		console.log('Unknown caffeine type '+type)
		alert('Error on processing caffeine intake.') // This is very poor error handling. Fix it later
	}
	
	count=goal/Math.pow(0.5, timing/halfLife)
	count/=initial
	
	// Round to nearest cup
	count=Math.round(count)
	
	countElement.value=count
}
