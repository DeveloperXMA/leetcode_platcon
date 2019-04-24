/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (41.06%)
 * Total Accepted:    371.1K
 * Total Submissions: 903.6K
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
/**
 * @param {string} digits
 * @return {string[]}
 */
const letters = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

function backTrack(lists, tempString, currentIndex, length, digits) {
  if (currentIndex === length) {
    lists.push(new String(tempString));
  } else {
    let currentLetter = digits[currentIndex];
    const currentOptions = letters[currentLetter];
    for (let i = 0; i < currentOptions.length; i++) {
      tempString += currentOptions[i];
      backTrack(lists, tempString, currentIndex + 1, length, digits);
      tempString = tempString.substr(0, tempString.length - 1);
    }
  }
}

var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let results = [];
  backTrack(results, "", 0, digits.length, digits);
  return results;
};

