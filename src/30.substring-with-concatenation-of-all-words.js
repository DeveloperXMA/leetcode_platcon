/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 *
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (24.76%)
 * Likes:    730
 * Dislikes: 1121
 * Total Accepted:    162.7K
 * Total Submissions: 656.8K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * You are given a string, s, and a list of words, words, that are all of the
 * same length. Find all starting indices of substring(s) in s that is a
 * concatenation of each word in words exactly once and without any intervening
 * characters.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * Output: [0,9]
 * Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar"
 * respectively.
 * The output order does not matter, returning [9,0] is fine too.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * ⁠ s = "wordgoodgoodgoodbestword",
 * ⁠ words = ["word","good","best","word"]
 * Output: []
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (words === null || words.length === 0) return [];
    if (s === null || s.length === 0) return [];
    let wordCount = words.length;
    let length = words[0].length;
    
    let wordCountMap = {};
    for (let word of words) {
        wordCountMap[word] = wordCountMap[word] ? wordCountMap[word] + 1 : 1;
    }
    let results = [];
    for (let i = 0; i <= s.length - wordCount * length; i++) {
        let copy = Object.assign({}, wordCountMap);
        let k = wordCount;
        let j = i;
        while (k > 0) {
            let subString = s.slice(j, j + length);
            if (copy[subString] === undefined || copy[subString] === 0) {
                break;
            }
            k--;
            copy[subString] = copy[subString] - 1;
            j = j + length;
        }
        if (k === 0) {
            results.push(i);
        }
    }
    return results;  
};
// @lc code=end

findSubstring("barfoothefoobarman", ["foo","bar"]);
