/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 *
 * https://leetcode.com/problems/sort-characters-by-frequency/description/
 *
 * algorithms
 * Medium (55.35%)
 * Total Accepted:    87.1K
 * Total Submissions: 157.4K
 * Testcase Example:  '"tree"'
 *
 * Given a string, sort it in decreasing order based on the frequency of
 * characters.
 * 
 * Example 1:
 * 
 * Input:
 * "tree"
 * 
 * Output:
 * "eert"
 * 
 * Explanation:
 * 'e' appears twice while 'r' and 't' both appear once.
 * So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid
 * answer.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * "cccaaa"
 * 
 * Output:
 * "cccaaa"
 * 
 * Explanation:
 * Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
 * Note that "cacaca" is incorrect, as the same characters must be together.
 * 
 * 
 * 
 * Example 3:
 * 
 * Input:
 * "Aabb"
 * 
 * Output:
 * "bbAa"
 * 
 * Explanation:
 * "bbaA" is also a valid answer, but "Aabb" is incorrect.
 * Note that 'A' and 'a' are treated as two different characters.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let obj = {};
    let result = [];
    for (let char of s) {
      obj[char] = obj[char] ? ++obj[char] : 1;
    }
    // Sort keys based on value, in desecding order
    let keys = Object.keys(obj).sort((a,b) => (obj[b] - obj[a]));
    for (let key of keys) {
      for (let i = 0; i < obj[key]; i++) {
        result += key;
      }
    }
    return result;
};

