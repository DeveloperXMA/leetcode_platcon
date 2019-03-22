/**
 * @param {number} rowIndex
 * @return {number[]}
 */

// Given a non - negative integer numRows, generate the first numRows of Pascal's triangle.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 3, 1],
//   [1, 4, 6, 4, 1]
// ]

const getRow = function (rowIndex: number): number[] {
  if (rowIndex < 0) throw new Error("index invalid");

  let result = new Array(rowIndex + 1).fill(0);
  result[0] = 1;
  for (let i = 0; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      result[j] = result[j] + result[j - 1];
    }
  }
  return result;
};

export default getRow;