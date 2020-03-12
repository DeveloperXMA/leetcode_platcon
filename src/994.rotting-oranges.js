/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 *
 * https://leetcode.com/problems/rotting-oranges/description/
 *
 * algorithms
 * Easy (47.21%)
 * Likes:    959
 * Dislikes: 141
 * Total Accepted:    57.7K
 * Total Submissions: 122.3K
 * Testcase Example:  '[[2,1,1],[1,1,0],[0,1,1]]'
 *
 * In a given grid, each cell can have one of three values:
 * 
 * 
 * the value 0 representing an empty cell;
 * the value 1 representing a fresh orange;
 * the value 2 representing a rotten orange.
 * 
 * 
 * Every minute, any fresh orange that is adjacent (4-directionally) to a
 * rotten orange becomes rotten.
 * 
 * Return the minimum number of minutes that must elapse until no cell has a
 * fresh orange.  If this is impossible, return -1 instead.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * 
 * 
 * Input: [[2,1,1],[1,1,0],[0,1,1]]
 * Output: 4
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [[2,1,1],[0,1,1],[1,0,1]]
 * Output: -1
 * Explanation:  The orange in the bottom left corner (row 2, column 0) is
 * never rotten, because rotting only happens 4-directionally.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [[0,2]]
 * Output: 0
 * Explanation:  Since there are already no fresh oranges at minute 0, the
 * answer is just 0.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= grid.length <= 10
 * 1 <= grid[0].length <= 10
 * grid[i][j] is only 0, 1, or 2.
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
  if (grid === null || grid.length === 0) return -1;
  let time = 0;
  let queue = [];
  let minute = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 2) {
            queue.push([i, j]);
          }
      }
  }
  while (queue.length > 0) {
    let size = queue.length;
    let isChanged = false;
    for (let i = 0; i < size; i++) {
      let position = queue.pop();
      let cRow = position[0];
      let cCol = position[1];
      //往上
      if (cRow - 1 >= 0 && grid[cRow - 1][cCol] === 1) {
          grid[cRow - 1][cCol] = 2;
          queue.unshift([cRow - 1, cCol]);
          isChanged = true;
      }
      
      if (cRow + 1 < grid.length && grid[cRow + 1][cCol] === 1) {
          grid[cRow + 1][cCol] = 2;
          queue.unshift([cRow + 1, cCol]);
          isChanged = true;
      }
      
      if (cCol - 1 >= 0 && grid[cRow][cCol - 1] === 1) {
          grid[cRow][cCol - 1] = 2;
          queue.unshift([cRow, cCol - 1]);
          isChanged = true;
      }
      
      if (cCol + 1 < grid[0].length && grid[cRow][cCol + 1] === 1) {
          grid[cRow][cCol + 1] = 2;
          queue.unshift([cRow, cCol + 1]);
          isChanged = true;
      }
    }
    if (isChanged) minute++;
}

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 1) {
              return -1;
          }
      }
  }
  return minute;
};

var bfs = function (grid, row, col) {
  if (row < 0 || row > grid.length || col < 0 || col > grid[0].length) {
      return -1;
  }
  if (grid[row][col] === 2) {
      let queue = [];
      let minute = 0;
      queue.push([row, col]);
      while (queue.length > 0) {
          let size = queue.length;
          let isAnyOrangeRotting = false;
          for (let i = 0; i < size; i++) {
            let position = queue.pop();
            let cRow = position[0];
            let cCol = position[1];
            //往上
            if (cRow - 1 >= 0 && grid[cRow - 1][cCol] === 1) {
                grid[cRow - 1][cCol] = 2;
                queue.unshift([cRow - 1, cCol]);
                isAnyOrangeRotting = true;
            }
            
            if (cRow + 1 < grid.length && grid[cRow + 1][cCol] === 1) {
                grid[cRow + 1][cCol] = 2;
                queue.unshift([cRow + 1, cCol]);
                isAnyOrangeRotting = true;
            }
            
            if (cCol - 1 >= 0 && grid[cRow][cCol - 1] === 1) {
                grid[cRow][cCol - 1] = 2;
                queue.unshift([cRow, cCol - 1]);
                isAnyOrangeRotting = true;
            }
            
            if (cCol + 1 < grid[0].length && grid[cRow][cCol + 1] === 1) {
                grid[cRow][cCol + 1] = 2;
                queue.unshift([cRow, cCol + 1]);
                isAnyOrangeRotting = true;
            }
          }
          if (isAnyOrangeRotting) minute++;
      }
      return minute;
  }
  return -1;
}
orangesRotting([[2,1,1],[1,1,0],[0,1,1]])

// @lc code=end

