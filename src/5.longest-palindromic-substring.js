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
    let dp = [...Array(s.length)].map(() => new Array(s.length).fill(false));
    let answer = "";
    let maxLength = 0;
    for (let j = 0; j < s.length;j++) {
      for (let i = 0; i <= j; i++) {
        dp[i][j] = (s[i] === s[j] && ( j - i <= 2 || dp[i+1][j-1]));
        if (dp[i][j]) {
          if (j - i + 1 > maxLength) {
            maxLength = j - i + 1;
            answer = s.slice(i, j + 1);
          }
        }
      }
    }
    return answer;
};

