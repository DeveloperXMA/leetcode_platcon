/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
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