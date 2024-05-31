// Write a function to print number range from a to b which is given in function as an argument by using recursion and also push output in an array
const numberRangeByRecursion = (num1, num2, output = []) => {
    if (num1 > num2) {
      return output;
    } else {
      output.push(num1);
      return numberRangeByRecursion(num1 + 1, num2, output);
    }
  };
  
  console.log(numberRangeByRecursion(1, 5));
  console.log(numberRangeByRecursion(-4, 19));
  console.log(numberRangeByRecursion(-6, 9));
  console.log(numberRangeByRecursion(-11, 11));
  
  