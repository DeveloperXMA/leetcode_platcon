/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
  if (grid === null || grid.length === 0) return 0;
  
  let rows = grid.length;
  let cols = grid[0].length;
  let dMap = new Set();
  let path;
  
  let bfs = (grid, i, j, direction) => {
    if (i >= 0 && i < rows && j >= 0 && j < cols && grid[i][j] === 1) {
      path += direction;
      grid[i][j] = 0;
      bfs(grid, i + 1, j ,'下');
      bfs(grid, i - 1, j ,'上');
      bfs(grid, i, j + 1 ,'右');
      bfs(grid, i, j - 1 ,'左');
      path += '出';
    }
  }
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        path = "";
        bfs(grid, i, j, '进');
        dMap.add(path);
      }
    }
  }
  
  return dMap.size
};