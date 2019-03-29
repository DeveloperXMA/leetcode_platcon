/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 *
 * https://leetcode.com/problems/to-lower-case/description/
 *
 * algorithms
 * Easy (76.39%)
 * Total Accepted:    86.2K
 * Total Submissions: 112.8K
 * Testcase Example:  '"Hello"'
 *
 * Implement function ToLowerCase() that has a string parameter str, and
 * returns the same string in lowercase.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "Hello"
 * Output: "hello"
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "here"
 * Output: "here"
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "LOVELY"
 * Output: "lovely"
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let lower = "";
  for (let character of str) {
    if (character <= 'Z' && character >= 'A') {
      lower += String.fromCharCode(32 + character.charCodeAt(0));
    } else {
      lower += character;
    }
  }
  return lower;
};

