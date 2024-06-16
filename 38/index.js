
const date1 = new Date('2024-06-01');
const date2 = new Date('2024-06-10');

// Calculate the time difference
const timeDifference = date2.getTime() - date1.getTime();

// Convert time difference from milliseconds to days
const daysDifference = timeDifference / (1000 * 3600 * 24);

// Round down to get whole days
const daysBetween = Math.floor(daysDifference);

console.log(`Days between ${date1.toDateString()} and ${date2.toDateString()}: ${daysBetween}`);
