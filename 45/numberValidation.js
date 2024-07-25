const validateIndianMobileNumber = (number) => {
  return /^[6-9][\d]{9}$/.test(number);
};

// Test Cases
console.log(validateIndianMobileNumber("9876543210")); // Expected output: true
console.log(validateIndianMobileNumber("8923456789")); // Expected output: true
console.log(validateIndianMobileNumber("897654321")); // Expected output: false
console.log(validateIndianMobileNumber("732107")); // Expected output: false
