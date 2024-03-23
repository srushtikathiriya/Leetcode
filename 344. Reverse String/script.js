// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 /**********************************************/

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

{
    function reverseString(s) {
        let a = 0;
        let b = s.length - 1;
    
        while (a < b) {
            // Swap characters at left and right indices
            let temp = s[a];
            s[a] = s[b];
            s[b] = temp;
    
            // Move pointers towards the center
            a++;
            b--;
        }
    }
    
    let s1 = ["h", "e", "l", "l", "o"];
    reverseString(s1);
    console.log(s1);

}

 /**********************************************/

// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
function reverseString(s) {
    let a = 0;
    let b = s.length - 1;

    while (a < b) {
        // Swap characters at left and right indices
        let temp = s[a];
        s[a] = s[b];
        s[b] = temp;

        // Move pointers towards the center
        a++;
        b--;
    }
}


let s1 = ["H", "a", "n", "n", "a", "h"];
reverseString(s1);
console.log(s1);

