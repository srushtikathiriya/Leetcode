// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

/*********************************************************/

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ');
    return arr[arr.length - 1].length; 
};
console.log(lengthOfLastWord("Hello World"));

/*********************************************************/

// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ');
    return arr[arr.length - 1].length; 
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));

/*********************************************************/

// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.


var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ');
    return arr[arr.length - 1].length; 
};
console.log(lengthOfLastWord("luffy is still joyboy"));