
//defination

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(arr, target) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === target)  //checks if the sum of the current pair of elements is equal to the target sum
             {
                return [i, j];
            }
        }
    }
    return [];
}

let arr = [3, 2, 4];
let target = 6;
console.log(twoSum(arr,target));



