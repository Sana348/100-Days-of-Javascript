

function sortArray(array) {

// Clone array

let arr = [...array];

// Using bubble sort

for (j = 0; j < arr.length; j++) {

for (let i = 0; i < arr.length; i++) {

if (arr[i] > arr[i + 1]) {

// Swap elements

let temp = arr[i];

arr[i] = arr[i + 1];

arr[i + 1] = temp;

return arr;

}

console.log(sortArray ([5, 3, 1, 8])); // [1, 3, 5, 8]