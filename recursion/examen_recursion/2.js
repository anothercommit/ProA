function findNumber(arr, num, i1 = 0, i2 = arr.length) {
	const medio = ~~((i1 + i2) / 2);
	if (medio >= i2) return false;
	if (arr[medio] === num) return true;
	else if (num > arr[medio]) return findNumber(arr, num, medio + 1, i2);
	else return findNumber(arr, num, i1, medio);
}

console.log(findNumber([1, 2, 3, 4, 5, 6, 7], 1));
