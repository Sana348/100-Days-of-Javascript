function checkEqual(a,b){

let result = a.reduce((accc,curval)=>{

if(!(b[a.indexOf(curval)] === curval)){

accc = false;

}

return accc;

}, true);

return result;

}