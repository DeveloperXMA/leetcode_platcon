/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.69%)
 * Likes:    2057
 * Dislikes: 1681
 * Total Accepted:    650.1K
 * Total Submissions: 1.9M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  if (strs === null || strs.length === 0) return "";
  let minLength = strs[0].length;
  for (let str of strs) {
      if (minLength < str.length) {
          minLength = str.length;
      }
  }
  let low = 0, high = minLength;
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (isCommon(strs, mid)) {
          low = mid + 1;
      } else {
          high = mid - 1;
      }
  }
  return strs[0].substring(0, Math.floor((low + high) / 2));
};

var isCommon = function (strs, len) {
  let subStr = strs[0].substring(0, len);
  for (let str of strs) {
      if (!str.startsWith(subStr)) {
          return false;
      }
  }
  return true;
}
// @lc code=end

