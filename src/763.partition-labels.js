/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 */
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let lastIndex = new Array(26).fill(0);
    for (let i = 0; i < S.length; i++) {
      lastIndex[S.charAt(i).charCodeAt(0) - 97] = i;
    }
    let result = [];
    for (let i = 0; i < S.length;) {
      let j = lastIndex[S.charAt(i).charCodeAt(0) - 97];
      for (let k = i; k < j; k++) {
        if (lastIndex[S.charAt(k).charCodeAt(0) - 97] > j) {
          j = lastIndex[S.charAt(k).charCodeAt(0) - 97];
        }
      }
      result.push(j - i + 1);
      i = j + 1;
    }
    return result;
};

