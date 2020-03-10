/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 *
 * https://leetcode.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (45.61%)
 * Likes:    1369
 * Dislikes: 55
 * Total Accepted:    289.6K
 * Total Submissions: 633K
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

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 var backTrack = function(nums, target, tempArray, result, index) {
  if (target < 0) {
      return;
  }
  if (target === 0) {
      result.push([...tempArray]);
  } else {
      for (let i = index; i < nums.length; i++) {
          if (i > index && nums[i] === nums[i - 1]) continue;
          tempArray.push(nums[i]);
          backTrack(nums, target - nums[i], tempArray, result, i + 1);
          tempArray.pop();
      }
  }
}

var combinationSum2 = function(candidates, target) {
  candidates.sort();
  let result = [];
  let tempArray = [];
  backTrack(candidates, target, tempArray, result, 0);
  return result;
};
// @lc code=end

