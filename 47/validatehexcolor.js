function isValidHexColor(hex) {
    const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexPattern.test(hex);
}

// Test cases
console.log(isValidHexColor("#FFFFFF")); // true
console.log(isValidHexColor("#FFF"));    // true
console.log(isValidHexColor("#33")); // false
console.log(isValidHexColor("#123"));    // true
console.log(isValidHexColor("#12345G")); // false
console.log(isValidHexColor("123456"));  // false
console.log(isValidHexColor("#1234"));   // false
