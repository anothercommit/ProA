function iBinarySearch(num, arr) {
	let medio = Math.floor(arr.length / 2);
	let i1 = 0;
	let i2 = arr.length;

	while (arr[medio] !== num) {
		if (medio >= i2) return false;
		else if (num > arr[medio]) i1 = medio + 1;
		else [i1, i2] = [0, medio];
		medio = Math.floor((i1 + i2) / 2);
	}

	return true;
}
