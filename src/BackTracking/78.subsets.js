/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 *
 * https://leetcode.com/problems/subsets/description/
 *
 * algorithms
 * Medium (51.64%)
 * Total Accepted:    345.5K
 * Total Submissions: 667.2K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a set of distinct integers, nums, return all possible subsets (the
 * power set).
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * Example:
 * 
 * 
 * Input: nums = [1,2,3]
 * Output:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 * 
 */
var backTrack = function(results, nums, tempArray, start) {
  results.push([...tempArray]);
  for (let i = start; i < nums.length; i++) {
    tempArray.push(nums[i]);
    backTrack(results, nums, tempArray, i + 1);
    tempArray.pop();
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort();
    let results = [];
    backTrack(results, nums, tempArray = [], start = 0);
    return results;
};

