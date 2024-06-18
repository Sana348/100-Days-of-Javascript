function generateTextBarChart(data) {
    const maxValue = Math.max(...data); // Find the maximum value in the data array

    data.forEach(value => {
        const barLength = Math.round((value / maxValue) * 20); // Adjust 20 for desired chart width

        // Create a string of '*' characters representing the bar
        const bar = '*'.repeat(barLength).padEnd(20); // PadEnd to ensure all bars are same length

        // Output the bar along with its corresponding value
        console.log(`${bar} | ${value}`);
    });
}

// Example data
const data = [5, 10, 8, 15, 12];

// Call the function to generate the text-based bar chart
generateTextBarChart(data);
