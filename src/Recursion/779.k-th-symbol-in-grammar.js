/*
 * @lc app=leetcode id=779 lang=javascript
 *
 * [779] K-th Symbol in Grammar
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
  if (N === 1) return 0;
  if (N === 2) {
    if (K === 1) {
      return 0;
    } else if (K === 2) {
      return 1;
    }
  }
  let currentLength = Math.pow(2, N - 1);
  if (K <= currentLength / 2) {
    return kthGrammar(N - 1, K);
  } else {
    return kthGrammar(N - 1, K - Math.floor(currentLength / 2)) === 0 ? 1 : 0;
  }
};