/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let table = {};
    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (table[diff] !== undefined) {
        return [table[diff], i];
      }
      table[nums[i]] = i;
    }
    return [];
};


