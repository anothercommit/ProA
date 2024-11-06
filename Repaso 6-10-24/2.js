function binarySearch(n, arr) {
  if (arr.length == 0) return false;

  const m = Math.floor(arr.length / 2);
  console.log("m", m);

  if (n == arr[m]) return true;

  return n > arr[m]
    ? binarySearch(n, arr.slice(m + 1))
    : binarySearch(n, arr.slice(0, m));
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(2, arr));
