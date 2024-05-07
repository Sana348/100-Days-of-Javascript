function highestNumber(arr){
    let highest=0;
    for(let i=0;i<arr.length;i++){
        if(highest<arr[i]){
            highest=arr[i];
        }
    }
    return highest;
}

console.log(highestNumber([1,45,11,22,567,0,9,7]))