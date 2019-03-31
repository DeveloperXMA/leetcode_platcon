/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 *
 * https://leetcode.com/problems/set-matrix-zeroes/description/
 *
 * algorithms
 * Medium (39.24%)
 * Total Accepted:    196.7K
 * Total Submissions: 501.3K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * Given a m x n matrix, if an element is 0, set its entire row and column to
 * 0. Do it in-place.
 * 
 * Example 1:
 * 
 * 
 * Input: 
 * [
 * [1,1,1],
 * [1,0,1],
 * [1,1,1]
 * ]
 * Output: 
 * [
 * [1,0,1],
 * [0,0,0],
 * [1,0,1]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 
 * [
 * [0,1,2,0],
 * [3,4,5,2],
 * [1,3,1,5]
 * ]
 * Output: 
 * [
 * [0,0,0,0],
 * [0,4,5,0],
 * [0,3,1,0]
 * ]
 * 
 * 
 * Follow up:
 * 
 * 
 * A straight forward solution using O(mn) space is probably a bad idea.
 * A simple improvement uses O(m + n) space, but still not the best
 * solution.
 * Could you devise a constant space solution?
 * 
 * 
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // Key idea is to set first row and first column as a flag
    // To indicate whether entire row and column should be set as 0

    // Most importantly, YOU MUST NOT CHANGE THE INIT VALUE of FIRST COL AND FIRST ROW

    // Use matrix[0][0] to indicate whether first row should be set to all 0
    // Use firstColumnToZero to indicate whether first Column should be set to all 0

    let rowLength = matrix.length;
    let columnLength = matrix[0].length;
    let firstColumnToZero = false;
    for (let i = 0; i < rowLength; i++) {
      if (matrix[i][0] === 0) {
        firstColumnToZero = true;
      }
      for (let j = 1; j < columnLength; j++) {
        if (matrix[i][j] === 0) {
          matrix[0][j] = 0;
          matrix[i][0] = 0;
        }
      }
    }

    for (let i = 1; i < rowLength; i++) {
      for (let j = 1; j < columnLength; j++) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }

    if (matrix[0][0] === 0) {
      for (let j = 0; j < columnLength; j++) {
        matrix[0][j] = 0;
      }
    }

    if (firstColumnToZero) {
      for (let i = 0; i < rowLength; i++) {
        matrix[i][0] = 0;
      }
    }
}
