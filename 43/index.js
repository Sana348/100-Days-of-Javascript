const fizzbuzz = (sNum, eNum) => {
    let arr = [];
    for (let i = sNum; i <= eNum; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push("fizzbuzz");
      } else if (i % 3 === 0) {
        arr.push("fizz");
      } else if (i % 5 === 0) {
        arr.push("buzz");
      } else {
        arr.push(i);
      }
    }
    return arr;
  };
  
  console.log(fizzbuzz(4, 35));
  