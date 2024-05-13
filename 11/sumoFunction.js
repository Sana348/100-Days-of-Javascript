const sumOfDigit=(val)=>{
    let val2=JSON.stringify(val).split('')
    let sum=val2.reduce((acc,curVal)=> acc + parseInt(curVal), 0);
   return sum;
}
console.log(sumOfDigit(12345)); //output 15