// 6
function binaryToDecimal(binary, i = 0, result = 0) {
	if (i > binary.length - 1) return result;
	else if (binary[binary.length - 1 - i] === "1")
		return binaryToDecimal(binary, i + 1, (result += 2 ** i));
	else return binaryToDecimal(binary, i + 1, result);
}

// 5
function terminanIgual(str1, str2, i = 1) {
	if (i >= str2.length && i <= str1.length) return true;
	else if (str1[str1.length - i] === str2[str2.length - i])
		return terminanIgual(str1, str2, i + 1);
	else return false;
}

// 4
function invertirStr(str, i = str.length - 1, result = "") {
	if (i === 0) return (result += str[i]);
	else return invertirStr(str, i - 1, (result += str[i]));
}

// 3
function esPalindrome(str, i = 0) {
	const posicion = str.length - 1 - i;
	if (i > posicion) return true;
	else if (str[i] === str[posicion]) return esPalindrome(str, i + 1);
	else return false;
}

// 2
function rCodificarRLE(str, i = 0, contador = 1, result = "") {
	if (i + 1 >= str.length)
		return (result += contador === 1 ? str[i] : `${contador}${str[i]}`);
	else if (str[i] === str[i + 1])
		return rCodificarRLE(str, i + 1, contador + 1, result);
	else {
		result += contador === 1 ? str[i] : `${contador}${str[i]}`;
		return rCodificarRLE(str, i + 1, 1, result);
	}
}

function rDecodificarRLE(str, i = 0, result = "") {
	if (i + 1 >= str.length) return (result += str[i]);
	else if (!isNaN(parseInt(str[i]))) {
		let numStr = str[i];
		for (let j = 1; j < str.length; j++) {
			if (!isNaN(parseInt(str[i + j]))) numStr += str[i + j];
			else break;
		}
		for (let j = 0; j < parseInt(numStr) - 1; j++)
			result += str[i + numStr.length];
		return rDecodificarRLE(str, i + numStr.length, result);
	} else return rDecodificarRLE(str, i + 1, (result += str[i]));
}

// 1
function ordenarArray(arr, i = 0) {
	if (i >= arr.length) return arr;
	else if (arr[i] > arr[i + 1]) {
		[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
		return ordenarArray(arr, arr[i] < arr[i + 1] ? i - 1 : i + 1);
	} else return ordenarArray(arr, i + 1);
}

// 0
function binarySearch(num, arr, iInicio = 0, iFinal = arr.length) {
	const medio = Math.floor((iInicio + iFinal) / 2);
	if (medio >= iFinal) return false;
	else if (arr[medio] === num) return true;
	else if (num > arr[medio]) return binarySearch(num, arr, medio, iFinal);
	else return binarySearch(num, arr, 0, medio);
}
