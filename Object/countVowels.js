/*
Write a function countVowels that takes in a string and counts how many vowels there are in the word. Vowels include: "a", "e", "i", "o", and "u".
Handle lowercase and uppercase vowels.
*/
function countVowels(str) {
    // Use a regular expression to match vowels (both lowercase and uppercase)
    let regex = /[aeiou]/gi;

    // Use match() method to find all occurrences of vowels in the string
    let matches = str.match(regex);

    // Return the number of matches (count of vowels)
    return matches ? matches.length : 0;
}

module.exports = countVowels
