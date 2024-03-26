// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

 /***********************************************************/

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1


var isPowerOfTwo = function(n) {
    const logValue = Math.log2(n)
    return logValue%1===0   //Check if the remainder of dividing logValue by 1 is equal to 0.
};
console.log(isPowerOfTwo(1));

 /***********************************************************/

// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16

var isPowerOfTwo = function(n) {
    const logValue = Math.log2(n)
    return logValue%1===0   //Check if the remainder of dividing logValue by 1 is equal to 0.
};
console.log(isPowerOfTwo(16));

 /***********************************************************/

// Example 3:

// Input: n = 3
// Output: false

var isPowerOfTwo = function(n) {
    const logValue = Math.log2(n)
    return logValue%1===0   //Check if the remainder of dividing logValue by 1 is equal to 0.
};
console.log(isPowerOfTwo(3));