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