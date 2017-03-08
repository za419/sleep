function postfix(n) {
	var str=n.toString();
	switch (str.substring(str.length-1)) {
	case "1":
		return "st"
	case "2":
		return "nd"
	case "3":
		return "rd"
	// All the rest fall through to "th"
	case "4":
	case "5":
	case "6":
	case "7":
	case "8":
	case "9":
	case "0":
		return "th"
	default: // We don't know how to postfix a string that doesn't end in a number.
		return ""
	}
}