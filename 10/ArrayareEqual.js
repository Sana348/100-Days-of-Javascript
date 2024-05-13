const arraysAreEqual = (array1, array2) => {
    if (array1.length !== array2.length) {
        return false
    }
    return array1.every((curVal, index)=> curVal === array2 [index])
}

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]))