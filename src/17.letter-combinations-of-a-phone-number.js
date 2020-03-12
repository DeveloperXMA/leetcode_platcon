/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (44.84%)
 * Likes:    3203
 * Dislikes: 368
 * Total Accepted:    530.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * Note:
 * 
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 * 
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  let letterArray = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z']
  };
  let results = [];
  let tempArray = [];
  function backTrack (results, tempArray, digits, index) {
      if (index === digits.length) {
          results.push([...tempArray]);
      } else {
          let character = digits[index];
          let charArray = letterArray[character];
          for (let i = 0; i < charArray.length; i++) {
            tempArray.push(charArray[i]);
            backTrack(results, tempArray, digits, index + 1);
            tempArray.pop();
          }
      }
  }
  backTrack(results, tempArray, digits, 0);
  console.log(results);
};

// @lc code=end
letterCombinations("23");

