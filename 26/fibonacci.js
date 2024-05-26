const fibonacci = (num) => {
    if (num <=1) {
        return num;
    }else {
        return fibonacci(num-1) + fibonacci(num-2);
    }
}
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(3)); // Output: 2
console.log(fibonacci(4)); // Output: 3
console.log(fibonacci(5)); // Output: 5t 





