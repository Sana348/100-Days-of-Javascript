function isPower(n) {
    let x = 1;
    while (x < n) {
        x = x * 2
    }
    return x === n
}
console.log(isPower(16))

