function isIsotram(str) {
	if (str == "") return true;
	else if (str.indexOf(str[0]) === 1) return isIsotram(str.substring(1));
	else return false;
}

console.log(isIsotram("abc"));
