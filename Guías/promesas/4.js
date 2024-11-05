const doblarNumero = (n) => new Promise((res) => setTimeout(10000, res(n * 2)));
const sumarDiez = (n) => new Promise((res) => setTimeout(1000, res(n + 10)));

doblarNumero(5).then((n) => sumarDiez(n).then((r) => console.log(r)));
