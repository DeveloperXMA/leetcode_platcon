/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (43.06%)
 * Total Accepted:    487.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 * 
 * Example:
 * 
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Solve it using DP
    // change the value of nums[i],
    // nums[i] should represent the max value if the array arrange
    // from 0 to i;
    // Base case, i === 0, the max value is nums[0]

    for (let i = 1; i < nums.length; i++) {
      nums[i] = Math.max(nums[i] + nums[ i - 1], nums[i]);
    }
    let max = nums[0];
    for (let j = 0; j < nums.length; j++) {
      if (max < nums[j]) {
        max = nums[j];
      }
    }
    return max;

};

