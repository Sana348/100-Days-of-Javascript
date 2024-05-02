function generateHash(str) {
  if (str.length >= 280 || str.trim().length === 0) {
    return false;
  }
  str = str.split(" ");
  str = str.map(
    (curElem) => curElem.charAt(0).toUpperCase() + curElem.slice(1)
  );
  str = `#${str.join(" ")}`;

 
}

console.log(generateHash("The full form of SD is Secure Digital"));
