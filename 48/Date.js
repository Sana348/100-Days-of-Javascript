

const validateDate = (date) => {
    const parsedDate = new Date(date);
    // Check if the parsedDate is valid
    if (isNaN(parsedDate)) {
      return false;
    }
    const year = parsedDate.getFullYear();
    // Check if the year is in the desired range
    return year > 1900 && year < 2099;
  };
  
  // Test cases
  console.log(validateDate('2024-07-30')); // true
  console.log(validateDate('1899-12-31')); // false
  console.log(validateDate('2100-01-01')); // false
  console.log(validateDate('not a date')); // false
  