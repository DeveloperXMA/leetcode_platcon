/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 *
 * https://leetcode.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (39.03%)
 * Likes:    1170
 * Dislikes: 325
 * Total Accepted:    270.6K
 * Total Submissions: 690.5K
 * Testcase Example:  '"egg"\n"add"'
 *
 * Given two strings s and t, determine if they are isomorphic.
 * 
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * 
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character but a character may map to itself.
 * 
 * Example 1:
 * 
 * 
 * Input: s = "egg", t = "add"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "foo", t = "bar"
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: s = "paper", t = "title"
 * Output: true
 * 
 * Note:
 * You may assume both s and t have the same length.
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    let map = new Map();
    let set = new Set();
    for (let i = 0; i < s.length;i++) {
      if ((map.has(s[i]) && map.get(s[i]) !== t[i])){
        return false;
      } else if (!map.has(s[i])) {
        if (set.has(t[i])) {
          return false;
        } else {
          map.set(s[i], t[i]);
          set.add(t[i]);
        }
      }
    }
    return true;
};
// @lc code=end