//Write a function to print number range from a till b which is given in the function as an argument  in the form of an array

const numberRange = (num1, num2) => {
  let range = [];
  for (let i = num1; i <= num2; i++) {
    range.push(i);
  }
  return range;
};

console.log(numberRange(1, 5));
console.log(numberRange(0, 10));
console.log(numberRange(-3, 11));
console.log(numberRange(-10, 16));