/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/**
 * @param {string} s
 * @return {string}
 */


var longestPalindrome = function(s) {
    if (s.length === 0 || s === null) return s;
    let answer = "";
    let max = 0;
    var helper = function (s, left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      let current = s.slice(left + 1, right);
      if (current.length > answer.length) {
        answer = current;
      }
    }
    for (let i = 0; i < s.length; i++) {
      helper(s, i, i);
      helper(s, i, i + 1);
    }
    
    return answer;
};

longestPalindrome("babad");




