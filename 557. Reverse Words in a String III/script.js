// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 /***********************************************************/

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

var reverseWords = function(s) {
    let arr=s.split(' ')
    for(i=0;i<arr.length;i++){
        arr[i] = arr[i].split('').reverse().join('')
    }
    return arr.join(' ')
};
console.log(reverseWords("Let's take LeetCode contest"));



/***********************************************************/

// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"

var reverseWords = function(s) {
    let arr=s.split(' ')
    for(i=0;i<arr.length;i++){
          arr[i] = arr[i].split('').reverse().join('')
    }
    return arr.join(' ')
};
console.log(reverseWords("Mr Ding"))