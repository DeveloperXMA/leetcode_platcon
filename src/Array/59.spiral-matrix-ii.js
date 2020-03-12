/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 *
 * https://leetcode.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (47.91%)
 * Likes:    774
 * Dislikes: 101
 * Total Accepted:    173.2K
 * Total Submissions: 338K
 * Testcase Example:  '3'
 *
 * Given a positive integer n, generate a square matrix filled with elements
 * from 1 to n^2 in spiral order.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
  let resultArray = [...Array(n)].map(() => new Array(n).fill(0));
  let dRow = [0, 1, 0, -1];
  let dCol = [1, 0, -1, 0];
  let dIndex = 0;
  
  let rows = n;
  let cols = n;
  let r = 0;
  let c = 0;
  
  let nextRow, nextCol;
  for (let i = 0; i < rows * cols; i++) {
      if (!resultArray[r][c]) {
          resultArray[r][c] = i + 1;
      }
      nextRow = r + dRow[dIndex];
      nextCol = c + dCol[dIndex];
      
      if (nextRow >= 0 && nextRow < rows && 
        nextCol >= 0 && nextCol < cols && 
        !resultArray[nextRow][nextCol]) {
          r = nextRow;
          c = nextCol;
      } else {
          dIndex = (1 + dIndex) % 4;
          r += dRow[dIndex];
          c += dCol[dIndex];
      }
  }
  return resultArray;
};
// @lc code=end

