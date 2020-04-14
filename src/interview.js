/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (res) {
    let rows = res.length, cols = res[res.length - 1].length;
    let set = new Set();
    const isValid = (res, i, j) => {
      if (i < 0 || i >= rows || j < 0 || j >= cols || res[i][j] === '#') {
          return false;
      }
      return true;
    }
    let ans = [];
    let i = 0, j = 0;
    while (i < rows) {
        if (isValid(res,i,j)) {
            ans.push(res[i][j]);
            set.add("" + i + j)
        }
        i++;
    }
    i--;
    j++;
    
    let rightMostCol = Math.pow(2, rows - 2) - 1;
    while (j < cols) {
    if (j % 2 === 1) {
        let parentIndex = Math.floor(j / 2);
        if (res[i][j - 1] === '#' && res[i][j] === '#' && i - 1 >= 0 
            && res[i - 1][parentIndex] !== '#'
            && parentIndex !== rightMostCol
            && parentIndex !== 0) {
            ans.push(res[i-1][parentIndex])
            set.add(i - 1 + "" + parentIndex)
        }
    }
        if (isValid(res,i,j)) {
            ans.push(res[i][j]);
            set.add("" + i + j)
        }
        j++;
    }
    i--;
    while (i > 0) {
        j = Math.pow(2, i) - 1;
        while (!isValid(res, i, j)) {
            j--;
        }
        if (!set.has(""+i+j)) {
          ans.push(res[i][j]);
        }
        i--;
    }
    return ans;
};

reverseWords([ 
  [ 1 ],
  [ 2, 8 ],
  [ 3, 6, '#', 7 ],
  [ 4, '#', '#', '#', '#', '#', '#', '#' ],
  [ 5, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#' ] 
])
