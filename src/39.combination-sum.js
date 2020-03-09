/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (53.28%)
 * Likes:    3077
 * Dislikes: 97
 * Total Accepted:    471.5K
 * Total Submissions: 882K
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

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var backTrack = function backTrack (result, tempArray, nums, reminder, index) {
  if (reminder < 0) {
    return;
  } else if (reminder === 0) {
    result.push([...tempArray]);
  } else {
    for (let i = index; i < nums.length; i++) {
      tempArray.push(nums[i]);
      backTrack(result, tempArray, nums, reminder - nums[i], i);
      tempArray.pop();
    }
  }
}

var combinationSum = function(candidates, target) {
    candidates.sort();
    let result = [];
    let tempArray = [];
    backTrack(result, tempArray, candidates, target, 0);
    return result;
};
// @lc code=end

