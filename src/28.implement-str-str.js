/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 *
 * https://leetcode.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (33.76%)
 * Likes:    1297
 * Dislikes: 1701
 * Total Accepted:    584.1K
 * Total Submissions: 1.7M
 * Testcase Example:  '"hello"\n"ll"'
 *
 * Implement strStr().
 * 
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 * 
 * Example 1:
 * 
 * 
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * 
 * 
 * Clarification:
 * 
 * What should we return when needle is an empty string? This is a great
 * question to ask during an interview.
 * 
 * For the purpose of this problem, we will return 0 when needle is an empty
 * string. This is consistent to C's strstr() and Java's indexOf().
 * 
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  if (haystack === "") return -1;    
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
      let temp = haystack.substring(i, i + needle.length);
      if (temp == needle) {
          return i;
      }
  }
  return -1;
};
// @lc code=end

