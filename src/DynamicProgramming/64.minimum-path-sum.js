/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 *
 * https://leetcode.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (50.91%)
 * Likes:    2256
 * Dislikes: 50
 * Total Accepted:    322.5K
 * Total Submissions: 628.6K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top
 * left to bottom right which minimizes the sum of all numbers along its path.
 * 
 * Note: You can only move either down or right at any point in time.
 * 
 * Example:
 * 
 * 
 * Input:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (grid === null || grid.length === 0) return -1;
    
  let rows = grid.length, cols = grid[0].length;    
  // let dp = [...Array(rows)].map(() => new Array(cols).fill(0));
 
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (i - 1 >= 0 && j - 1 >= 0) {
              grid[i][j] = grid[i][j] + Math.min(grid[i - 1][j], grid[i][j - 1]);
          } else if (i - 1 < 0 && j - 1 >= 0) {
              grid[i][j] = grid[i][j] + grid[i][j - 1];
          } else if (i - 1 < 0 && j - 1 < 0) {
              grid[i][j] = grid[i][j];
          } else if (i - 1 >= 0 && j - 1 < 0) {
              grid[i][j] = grid[i][j] + grid[i - 1][j];
          }
      }
  }
  return grid[rows - 1][cols - 1];  
};
// @lc code=end

