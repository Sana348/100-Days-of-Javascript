function calculateSimpleInterest(principal, rate, time) {
  // Calculate the simple interest
  const interest = (principal * rate * time) / 100;

  // Return the simple interest
  return interest;
}

// Example usage:
const principal = 1000;
const rate = 5;
const time = 1;

// Calculate the simple interest
const interest = calculateSimpleInterest(principal, rate, time);

// Print the simple interest
console.log(interest); // 50