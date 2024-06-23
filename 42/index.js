// Luhn Algorithm Implementation

function validateCreditCard(cardNumber) {
    // Convert the card number to a string
    let str = cardNumber.toString();
    console.log("Original Number: ", str);

    // Step 1: Reverse the number
    let revNum = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revNum += str[i];
    }
    console.log("Reversed Number: ", revNum);

    // Step 2: Double every second digit from the right
    let doubleNum = revNum
        .split("")
        .map((curDigit, index) => {
            curDigit = parseInt(curDigit);
            if (index % 2 !== 0) {
                curDigit *= 2;
                if (curDigit > 9) {
                    curDigit -= 9;
                }
            }
            return curDigit;
        });
    console.log("Doubled Every Second Digit: ", doubleNum.join(""));

    // Step 3: Sum all the digits
    let sum = doubleNum.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum of Digits: ", sum);

    // Step 4: Check if the sum is a multiple of 10
    let isValid = sum % 10 === 0;
    console.log("Is Valid: ", isValid);

    return isValid;
}

// Example usage:
let cardNumber = 1234567812345670;
validateCreditCard(cardNumber);
