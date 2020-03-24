/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (25.71%)
 * Likes:    5688
 * Dislikes: 688
 * Total Accepted:    786.4K
 * Total Submissions: 3.1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  if (nums.length < 3) {
      return [];
  }
  nums.sort((a, b) => a - b);
  let results = [];
  if (nums[0] > 0) return results;
  for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let currentValue = nums[i];
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
          let sum = nums[i] + nums[left] + nums[right];
          if (sum === 0) {
              results.push([nums[i],nums[left],nums[right]]);
              // 这一步很重要 还有去重一次
              while (nums[left] === nums[left + 1]) {
                  left++;
              }
              left++;
              right--;
          } else if (sum > 0) {
              right--;
          } else {
              left++;
          }
      }
  }
  return results;
};
// @lc code=end

threeSum([-1, 0, 1, 2, -1, -4],);