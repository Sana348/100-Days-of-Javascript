function findMedian(arr) {
    arr = arr.sort((a, b) => a - b);
    console.log(arr);
    if (arr.length % 2 === 0)
      return (
        arr[Math.floor((arr.length - 1) / 2)] +
        arr[Math.floor((arr.length - 1) / 2 + 1)]
      );
    else return arr[Math.round((arr.length - 1) / 2)];
  }
  
  console.log(findMedian([3, 1, 2, 8, 7]));
  console.log(findMedian([3, 1, 8, 7]));
  console.log(findMedian([3, 1, 8, 7, 11, 9]));