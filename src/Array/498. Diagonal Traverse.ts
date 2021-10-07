/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let rowL = mat.length, colL = mat[0].length;
    let r = 0, c = 0;
    let result = [];
    while (c < colL) {
        let temp = [];
        let currentR = r, currentC = c;
        while (currentR < rowL && currentC >= 0) {
            temp.push(mat[currentR++][currentC--]);
        }
        result.push(temp);
        c++;
    }
    --c; //返回正确的位置，避免越界
    while (r < rowL) {
        let temp = [];
        let currentR = r + 1, currentC = c; // 用r+1是避免重复 不加一的话 最长的对角线会被计算两次
        while (currentR < rowL && currentC >= 0) {
            temp.push(mat[currentR++][currentC--]);
        }
        if (temp.length > 0) result.push(temp);
        r++;
    }
    --r;
    let ans = [];
    for (let i = 0; i < result.length; i++) {
        if (i % 2 === 0) {
            result[i] = result[i].reverse();
        }
    }
    for (let i = 0; i < result.length; i++) {
        ans = ans.concat(result[i]);
    }
    return ans;
    
};