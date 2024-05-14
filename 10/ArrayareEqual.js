<<<<<<< HEAD
const arraysAreEqual = (array1, array2) => {
    if (array1.length !== array2.length) {
        return false
    }
    return array1.every((curVal, index)=> curVal === array2 [index])
}

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]))
=======
function checkEqual(a,b){

let result = a.reduce((accc,curval)=>{

if(!(b[a.indexOf(curval)] === curval)){

accc = false;

}

return accc;

}, true);

return result;

}
>>>>>>> 154a50b060296253b32d6ac348d2573592aac9c5
