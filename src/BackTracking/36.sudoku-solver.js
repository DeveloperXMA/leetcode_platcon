// https://leetcode.com/problems/sudoku-solver/

// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

// Example 1:


// Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
// Explanation: The input board is shown above and the only valid solution is shown below:


// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.
// It is guaranteed that the input board has only one solution.
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// 我的这个答案是对的没问题

// Global store
let rows = [...Array(9)].map(() => new Set());
let cols = [...Array(9)].map(() => new Set());
let boxes = [...Array(9)].map(() => new Set());

let solvedSudoku = false;

var solveSudoku = function(board) {
    
    // Fill init sets
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const currentVal = board[i][j];
            if (currentVal !== '.') {
                const currentBox = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                rows[i].add(parseInt(currentVal));
                cols[j].add(parseInt(currentVal));
                boxes[currentBox].add(parseInt(currentVal));
            }
        }
    }
    
    // helper funciton, put it inside so it has access to board variable
    const placeNumber = (number, i, j) => {
        const currentBox = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        rows[i].add(number);
        cols[j].add(number);
        boxes[currentBox].add(number);
        board[i][j] = number.toString();
    }
    
    // helper funciton, put it inside so it has access to board variable
    const removeNumber = (number, i, j) => {
        const currentBox = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        rows[i].delete(number);
        cols[j].delete(number);
        boxes[currentBox].delete(number);
        board[i][j] = '.';
    }
    
    const placeNextNumber = (row, col) => {
        // Check if we are reach an end state
        if (row === 8 && col === 8) { // this means we get it done
            solvedSudoku = true;
        } else {
           if (col === 8) backTrack(row + 1, 0);
            else backTrack(row, col + 1);
        }
    }
    
    const backTrack = (row, col) => {
        if (board[row][col] === '.') { // If it's empty, we can place stuff here
            for (let i = 1; i < 10; i++) {
                if (canPlace(i, row, col)) {
                    placeNumber(i, row, col);
                    placeNextNumber(row, col);
                    if (!solvedSudoku) {
                        removeNumber(i, row, col);
                    }
                }
            }
        } else {
            placeNextNumber(row, col);
        }
    }
    
    backTrack(0, 0);

};

// Chech if number can be placed at position i, j
const canPlace = (number, i, j) => {
    const currentBox = Math.floor(i / 3) * 3 + Math.floor(j / 3);
    if (rows[i].has(number) || cols[j].has(number) || boxes[currentBox].has(number)) {
        return false;
    } else {
        return true;
    }
}
