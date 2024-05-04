Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".


//* Solution:
function checkTriangle(a, b, c) {
  if (a === b && b === c) return "equilateral";
  else if (a === b || b === c || a === c) return "isoceles";
  else return "scalene";
}

console.log(checkTriangle(3, 3, 3)); // Output: "equilateral"
console.log(checkTriangle(3, 4, 3)); // Output: "isoceles"
console.log(checkTriangle(5, 8, 6)); // Output: "scalene"

