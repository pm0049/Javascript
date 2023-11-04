/*
The function countC takes a string str as its only argument.
This function should return the number of c's found in the string. It must count both lower-case c and upper-case C.
*/
function countC(str) {
    let regex = /c/gi;
    // Use match() method to find all occurrences of 'c' and 'C' in the string
    let matches = str.match(regex);
    // Return the number of matches (count of 'c' and 'C')
    return matches ? matches.length : 0; 
}

module.exports = countC;
