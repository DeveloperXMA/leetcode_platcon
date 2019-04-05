/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 *
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (40.74%)
 * Total Accepted:    322.3K
 * Total Submissions: 790.9K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of
 * islands. An island is surrounded by water and is formed by connecting
 * adjacent lands horizontally or vertically. You may assume all four edges of
 * the grid are all surrounded by water.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 * 
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 * 
 * Output: 3
 * 
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var dfs = function (grid, r, c) {
  let rowLength = grid.length;
  let colLength = grid[0].length;

  if (r < 0 || c < 0 || r >= rowLength || c >= colLength || grid[r][c] === '0') {
    return;
  }
  grid[r][c] = '0';
  dfs(grid, r + 1, c);
  dfs(grid, r - 1, c);
  dfs(grid, r, c + 1);
  dfs(grid, r, c - 1);
}



var numIslands = function(grid) {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
      return 0;
    }
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === '1') {
          count++;
          dfs(grid,i,j);
        }
      }
    }
    return count;
};

var bfs = function (grid, r, c) {
  let rowLength = grid.length;
  let colLength = grid[0].length;

  if (r >= rowLength || c >= colLength || r < 0 || c < 0 || grid[r][c] === '0') {
    return;
  }

  let queue = [];
  queue.unshift([r, c]);
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let array = queue.pop();
      let currentRow = array[0];
      let currentCol = array[1];
      if (currentRow - 1 >= 0 && grid[currentRow - 1][currentCol] === '1') {
        grid[currentRow - 1][currentCol] = '0';
        queue.unshift([currentRow - 1, currentCol]);
      }
      if (currentRow + 1 < rowLength && grid[currentRow + 1][currentCol] === '1') {
        grid[currentRow + 1][currentCol] = '0';
        queue.unshift([currentRow + 1, currentCol]);
      }
      if (currentCol + 1 < colLength && grid[currentRow][currentCol + 1] === '1') {
        grid[currentRow][currentCol + 1] = '0';
        queue.unshift([currentRow, currentCol + 1]);
      }
      if (currentCol - 1 >= 0 && grid[currentRow][currentCol - 1] === '1') {
        grid[currentRow][currentCol - 1] = '0';
        queue.unshift([currentRow, currentCol - 1]);
      }
    }
  }
}

var numIslands = function (grid) {
  if (grid === null || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  let rowLength = grid.length;
  let colLength = grid[0].length;

  let result = 0;
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (grid[i][j] === '1') {
        grid[i][j] === '0';
        result++;
        bfs(grid, i, j);
      }
    }
  }
  return result;
};


