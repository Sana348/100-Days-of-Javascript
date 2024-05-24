function findMode(arr){
    let count =  {};
    for(let ele of arr){
      count[ele]= (count[ele]||0)+1
    }
    let res= Object.keys(count).reduce((a,b)=>
      count[a]>count[b]? a:b
    )
    return res
  }
  console.log(findMode([3,45,5,45,5,3]));
  console.log(findMode([1,2,2,3,4,1,2]));