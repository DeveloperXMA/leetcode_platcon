/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (53.78%)
 * Total Accepted:    318K
 * Total Submissions: 589.3K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var backTrack = function (result, tempString, left, right) {
  if (left > right) {
    return;
  } else if (left === 0 && right === 0) {
    result.push(tempString);
    return;
  }
  if (left > 0) {
    backTrack(result, tempString + "(", left - 1, right);
  }
  if (right > 0) {
    backTrack(result, tempString + ")", left, right - 1);
  }
}

var generateParenthesis = function (n) {
  let result = [];
  let tempString = "";
  backTrack(result, tempString, n, n);
  return result;
};
