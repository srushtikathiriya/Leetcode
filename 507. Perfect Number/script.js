// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.

 /***********************************************************/

// Example 1:

// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.

var checkPerfectNumber = function(num) {
    if (num <= 0) {
        return false;
    }

    let sum = 0;
    // Iterate from 1 to num - 1 to find divisors
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    
    // Check if the sum of divisors is equal to num
    return sum === num;
};
console.log(checkPerfectNumber(28));

 /***********************************************************/

// Example 2:

// Input: num = 7
// Output: false

var checkPerfectNumber = function(num) {
    if (num <= 0) {
        return false;
    }

    let sum = 0;
    // Iterate from 1 to num - 1 to find divisors
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    
    // Check if the sum of divisors is equal to num
    return sum === num;
};
console.log(checkPerfectNumber(7));