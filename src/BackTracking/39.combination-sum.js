/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (47.32%)
 * Total Accepted:    321.6K
 * Total Submissions: 677K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * Given a set of candidate numbers (candidates) (without duplicates) and a
 * target number (target), find all unique combinations in candidates where the
 * candidate numbers sums to target.
 * 
 * The same repeated number may be chosen from candidates unlimited number of
 * times.
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
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 * 
 * 
 */
var backTrack = function (result, tempArray, nums, remainder, startIndex) {
  if (remainder < 0) {
    return;
  } else if (remainder === 0) {
    result.push([...tempArray]);
  } else {
    for (let i = startIndex; i < nums.length; i++) {
      tempArray.push(nums[i]);
      backTrack(result, tempArray, nums, remainder - nums[i], i);
      tempArray.pop();
    }
  }

}

var combinationSum = function (candidates, target) {
  candidates.sort();
  let result = [];
  let tempArray = [];
  backTrack(result, tempArray, candidates, target, 0);
  return result;
};

