/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    nums.sort((a,b) => (a - b));
    let result = [];
    backTrack(nums, result, [], 0);
    console.log(result);
};

var backTrack = function(nums, result, tempArray) {
  if (tempArray.length === nums.length) {
    result.push([...tempArray]);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (tempArray.includes(nums[i])) continue;
      tempArray.push(nums[i]);
      backTrack(nums, result, tempArray);
      tempArray.pop();
    }
  }
}

