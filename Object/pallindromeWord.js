/*Write a function isPalindrome that takes a word string and returns true if the word is a palindrome or false if it is not.
A palindrome is a word that is spelled the same forwards as it is backwards.
The word pop is a palindrome*/
/*
FIRST I WRITE MY WRONG LOGIC
function isPalindrome(string) {
   p=string;
   string k=" ";
   for(let i=string.length;i>0;i--){
     k+=i;
   }
   if(k===p){
       return true;
   }
}

module.exports = isPalindrome;
*/
//RIGHT ANS START FROM HERE
function isPalindrome(string) {
    return string === reverse(string);
}
function reverse(string) {
    let newStr = "";
   for (let i = string.length - 1; i >= 0; i--) {
        newStr += string[i]
    }
 return newStr;
}
module.exports = isPalindrome
