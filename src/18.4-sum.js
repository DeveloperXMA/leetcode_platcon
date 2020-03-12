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
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a, b) => (a - b));
  let results = [];
  for (let i = 0; i < nums.length - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      for (let j = i + 1; j < nums.length - 2; j++) {
          if (j > i + 1 && nums[j] === nums[j - 1]) continue;
          let left = j + 1;
          let right = nums.length - 1;
          while (left < right) {
              let sum = nums[i] + nums[j] + nums[left] + nums[right];
              if (sum === target) {
                  results.push([nums[i], nums[j], nums[left], nums[right]]);
                  while (left < right && nums[left] === nums[left + 1]) {
                      left++;
                  }
                  left++;
                  right--;
              } else if (sum > target) {
                  right--;
              } else {
                  left++;
              }
          }            
      }
  }
  return results;
};