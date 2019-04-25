/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a,b) => (a - b));
  let result = [];
  for (let start = 0; start < nums.length - 3; start++) {
    if (start > 0 && nums[start] === nums[start - 1]) continue; 
    let temp = threeSum(nums.slice(start + 1), target - nums[start]);
    for (let v of temp) {
      result.push([nums[start]].concat(v));
    }
  }
  return result;
};

var threeSum = function(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let start = i + 1, end = nums.length - 1; start < end;) {
      let currentSum = nums[i] + nums[start] + nums[end];
      if (currentSum < target) {
        start++;
      } else if (currentSum > target) {
        end--;
      } else if (currentSum === target) {
        result.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
        while (start < end && nums[start] === nums[start - 1]) {
          start++;
        }
        while (start < end && nums[end] === nums[end + 1]) {
          end--;
        }
      }
    }
  }
  return result;
};