const findMin =(arr)=> {
    arr = arr.sort((a,b) =>{
        if(b>a) return -1;

    })
    return arr[0];

}

console.log(findMin([5, 10, 2, 8])); // Output: 2
console.log(findMin([5, -3, 0, 12, -7])); // Output: -7
console.log(findMin([])); // Output: undefined (or any suitable message for empty array)