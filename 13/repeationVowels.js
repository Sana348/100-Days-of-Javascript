const countVowels = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = str.split('');
    let count = 0;

    for (let char of arr) {
        if (vowels.includes(char.toLowerCase())) {
            count++;
        }
    }

    return count;
};

console.log(countVowels("Helloo world")); // Output: 4
console.log(countVowels("ThE quIck brOwn fOx")); // Output: 5
console.log(countVowels("Hello world")); // Output: 3
