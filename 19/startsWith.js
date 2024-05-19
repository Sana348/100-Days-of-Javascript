const startsWith = (str, substr) => {
    return str.toLowerCase().startsWith(substr.toLowerCase())
}



console.log(startsWith("Hello World", "hello")); //true
console.log(startsWith("Hello World", "world")); //false