// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

/************************************************************/

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]



var searchRange = function(nums, target) {
    const start = nums.indexOf(target);
    const end = nums.lastIndexOf(target);
    return [start, end];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

/************************************************************/

// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]



var searchRange = function(nums, target) {
    const start = nums.indexOf(target);
    const end = nums.lastIndexOf(target);
    return [start, end];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));

/************************************************************/

// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]


var searchRange = function(nums, target) {
    const start = nums.indexOf(target);
    const end = nums.lastIndexOf(target);
    return [start, end];
};

console.log(searchRange([], 0));