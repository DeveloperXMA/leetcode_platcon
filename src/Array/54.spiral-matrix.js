/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return [];
  
  // This is the direction index, we % with the 4 to represent 4 possible directions
  let dIndex = 0; 
  let rows = matrix.length;
  let cols = matrix[0].length;
  
  // This is used to decide whether we have seen this element before.
  // Be careful when you try to init a two deminition array
  let seen = [...Array(rows)].map(() => new Array(cols).fill(false));
  
  let results = [];

  let r = 0, c = 0;
  
  // this is the most important part, instead of right four direction to determine next positon
  // we use array dr, dc
  let dr = [0, 1, 0, -1];
  let dc = [1, 0, -1, 0];
  // You should see by now dr[0], dc[0] means we are moving to right
  // dr[1], dc[1] means we are moving down
  // dr[2], dc[2] means we are moving left
  // dr[3], dc[3] means we are moving up
  
  let nextRow, nextCol;
  for (let i = 0; i < (rows * cols); i++) {
      results.push(matrix[r][c]);
      seen[r][c] = true;
      nextRow = r + dr[dIndex];
      nextCol = c + dc[dIndex];
      
      // if they are in the right position
      if (nextRow >=0 && nextRow < rows && nextCol >= 0 && nextCol < cols && !seen[nextRow][nextCol]) {
          r = nextRow;
          c = nextCol;
       } else {
           dIndex = (dIndex + 1) % 4;
           r += dr[dIndex];
           c += dc[dIndex];
       }
  }
  return results;
};

spiralOrder([[1,2,3],[4,5,6],[7,8,9]]);

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return [];
  
  const rowL = matrix.length;
  const colL = matrix[0].length;
  const steps = rowL * colL;
  
  let result = [];
  
  let seen = [...new Array(rowL)].map(() => [...new Array(colL)].fill(false));
  
  const dir = [[0, 1], [1, 0], [0 , -1], [-1, 0]]; // 向右，下，左， 上
  let currDir = 0;
  let r = 0, c = 0;
  for (let i = 0; i < steps; i++) {
      result.push(matrix[r][c]);
      seen[r][c] = true;
      let nextRowIndex = r + dir[currDir][0];
      let nextColIndex = c + dir[currDir][1];
      if (nextRowIndex >= rowL || nextRowIndex < 0 || nextColIndex >= colL || nextColIndex < 0 || seen[nextRowIndex][nextColIndex]) {
          currDir = (currDir + 1) % 4;
      }
      r = r + dir[currDir][0];
      c = c + dir[currDir][1];
  }
  return result;
};