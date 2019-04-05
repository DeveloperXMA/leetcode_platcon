/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (54.04%)
 * Total Accepted:    356K
 * Total Submissions: 657.4K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a collection of distinct integers, return all possible permutations.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,3]
 * Output:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var backTrack = function (results, tempArray, nums) {
  if (tempArray.length === nums.length) {
    results.push([...tempArray]);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (tempArray.includes(nums[i])) continue;
      tempArray.push(nums[i]);
      backTrack(results, tempArray, nums);
      tempArray.pop();
    }
  }
}

var permute = function (nums) {
  let results = [];
  let tempArray = [];
  backTrack(results, tempArray, nums);
  return results;
};

