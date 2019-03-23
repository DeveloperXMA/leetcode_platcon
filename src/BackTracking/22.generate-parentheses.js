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
var generateParenthesis = function (n) {
  let results = [];
  backTrack(results, "", 0, 0, n);
  return results;
};

var backTrack = function (results, tempString, left, right, total) {
  if (tempString.length === total * 2) {
    results.push(tempString);
  } else {
    if (left < total) {
      backTrack(results, tempString + "(", left + 1, right, total);
    }
    if (right < left) {
      backTrack(results, tempString + ")", left, right + 1, total)
    }
  }
}