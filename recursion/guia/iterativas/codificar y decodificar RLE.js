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

function iCodificarRLE(str) {
	let contador = 1;
	let resultado = "";

	for (let i = 0; i < str.length - 1; i++) {
		if (str[i] === str[i + 1]) contador++;
		else {
			resultado += contador === 1 ? str[i] : `${contador}${str[i]}`;
			contador = 1;
		}
	}

	if (contador === 1) resultado += str[str.length - 1];
	else str += resultado += `${contador}${str[str.length - 1]}`;

	return resultado;
}

function iCodificarRLE(str) {}
