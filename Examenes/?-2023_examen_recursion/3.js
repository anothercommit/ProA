function isPrime(n, i = 2) {
	if (n === 1) return false;
	else if (i > n / 2) return true;
	else if (n % i != 0) return isPrime(n, i + 1);
	else return false;
}
console.log(isPrime(101));
