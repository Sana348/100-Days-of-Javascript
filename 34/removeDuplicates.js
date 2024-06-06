let arr = ['a','b','c','a','d']

function remDup(array){
  console.log(array)
  let uniqueset = new Set(array)
  console.log(uniqueset)
 let uniquearray= Array.from(uniqueset)
 console.log(uniquearray)

}

let value = remDup(arr)
console.log(value)

