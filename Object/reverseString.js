/*Write a function reverse that takes a string as an argument and returns a string with all the letters reversed.
For example, reverse("cat") would return the string "tac".*/

/*    // Use split(), reverse(), and join() methods to reverse the string*/

function reverse(string) {
    let newStr = "";

    for (let i = string.length - 1; i >= 0; i--) {
        newStr += string[i]
    }

    return newStr;
}

module.exports = reverse;
