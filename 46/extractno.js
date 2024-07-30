function extractNumber(str) {
    return str.split('').filter(char => !isNaN(char) && char !== ' ').join('');
}

console.log(extractNumber("abc123def456"));  // Output: "123456"
console.log(extractNumber("no number here")); // Output: ""
