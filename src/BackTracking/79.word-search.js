/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (dfs(board, word, 0, i, j)) {
              return true;
          }
      }
  }
  return false;
};

var outBoundry = function(board, row, col) {
  if (row >= 0 && row < board.length && col >= 0 && col < board[0].length) {
      return true;
  } else {
      return false;
  }
}

var dfs = function(board, word, index, row, col) {
  if (!outBoundry(board, row, col)) return false;
  if (word[index] !== board[row][col]) return false;
  if (index === word.length - 1) return true;
  let original = board[row][col];
  board[row][col] = '#';
  const result = dfs(board, word, index + 1, row + 1, col) 
  || dfs(board, word, index + 1, row - 1, col)
  || dfs(board, word, index + 1, row, col + 1)
  || dfs(board, word, index + 1, row, col - 1);
  board[row][col] = original;
  return result;
  
}
