/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 *
 * https://leetcode.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (40.63%)
 * Total Accepted:    209.8K
 * Total Submissions: 514.4K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * Given a collection of candidate numbers (candidates) and a target number
 * (target), find all unique combinations in candidates where the candidate
 * numbers sums to target.
 * 
 * Each number in candidates may only be used once in the combination.
 * 
 * Note:
 * 
 * 
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: candidates = [10,1,2,7,6,1,5], target = 8,
 * A solution set is:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,5,2,1,2], target = 5,
 * A solution set is:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var backTrack = function (results, tempArray, nums, target, startIndex) {
  if (target < 0) {
    return;
  } else if (target === 0) {
    return results.push([...tempArray]);
  } else {
    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) continue;
      tempArray.push(nums[i]);
      backTrack(results, tempArray, nums, target - nums[i], i + 1);
      tempArray.pop();
    }
  }
}


var combinationSum2 = function (candidates, target) {
  candidates.sort();
  let result = [];
  let tempArray = [];
  backTrack(result, tempArray, candidates, target, 0);
  return result;
};

