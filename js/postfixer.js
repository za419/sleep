/*
 * postfix: Returns the ordinal postfix of the number passed to it.
 * Assumes that n is a number, or an object whose string representation ends with a number.
 * If this is not the case, no guarantee is made regarding its return value.
 */
function postfix(n) {
	var str=n.toString();
	if (str.length>1 && str.charAt(str.length-2)=="1") // Any number that ends in '1x' has ordinal postfix "th"
		return "th"

	// Now do last-character search
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