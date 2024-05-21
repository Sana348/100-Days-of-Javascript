const calcMean = (array) => {
    let sum = new Number();
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  };
  console.log(calcMean([10, 20, 30]));