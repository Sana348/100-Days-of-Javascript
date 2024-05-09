const calculateAverage = (arr) => {
    let sum = arr.reduce((acc, val) => acc + val , 0);
    return sum / arr.length;
}

console.log(calculateAverage([13, 17, 4, 9])); // Corrected function name
