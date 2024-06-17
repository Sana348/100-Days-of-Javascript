function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

// Example usage:
const dateOfBirth = '1990-05-15'; // Example date of birth
const age = calculateAge(dateOfBirth);
console.log(`The person's age is ${age} years.`);
