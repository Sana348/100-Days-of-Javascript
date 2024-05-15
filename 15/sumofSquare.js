const sumOfSquare = (arr) => {
    let sum = 0;
    for (let elem of arr) {
        sum = sum + elem * elem;
    }
    return sum;
}
console.log(sumOfSquare([1, 2, 3])); 
