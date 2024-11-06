function isCapicua(str) {
  return str.length == 0
    ? true
    : str[0] == str[str.length - 1]
      ? isCapicua(str.slice(1, str.length - 1))
      : false;
}

console.log(isCapicua("oso"));
console.log(isCapicua("reconocer"));
console.log(isCapicua("capicua"));
