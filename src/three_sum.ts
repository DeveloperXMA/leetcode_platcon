// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ? Find all unique triplets in the array which gives the sum of zero.

//   Note:

// The solution set must not contain duplicate triplets.

//   Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

//   A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// Key idea is to sort the array,
// then set two pointers in the remaining array
// change ponters to remove duplicates

/**
* @param {number[]} nums
* @return {number[][]}
*/
var threeSum = function (nums) {
  nums.sort((a, b) => (a - b));
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return result;
    
    // change ponters to remove duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let start = i + 1, end = nums.length - 1; start < end;) {
      let currentSum = nums[i] + nums[start] + nums[end];
      if (currentSum < 0) {
        start++;
      } else if (currentSum > 0) {
        end--;
      } else if (currentSum === 0) {
        result.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
        // change ponters to remove duplicates
        while (start < end && nums[start] === nums[start - 1]) {
          start++;
        }
        // change ponters to remove duplicates
        while (start < end && nums[end] === nums[end + 1]) {
          end--;
        }
      }
    }
  }
  return result;
};