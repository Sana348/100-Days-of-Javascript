const isUpperCase = (char) =>
  char.length === 1 && char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;

const isLowerCase = (char) =>
  char.length === 1 && char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;

console.log(isUpperCase('A')); // true
console.log(isUpperCase('a')); // false
console.log(isUpperCase('1')); // false
console.log(isLowerCase('a')); // true
console.log(isLowerCase('A')); // false
console.log(isLowerCase('1')); // false