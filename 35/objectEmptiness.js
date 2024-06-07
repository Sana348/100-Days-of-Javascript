// Write a function to check an object is empty or not
const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

console.log(isEmptyObject({}));
console.log(isEmptyObject({ name: "Abdullah" }));
console.log(isEmptyObject({ rollNo: 57 }));