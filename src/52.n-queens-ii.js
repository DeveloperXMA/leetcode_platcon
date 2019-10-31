/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 *
 * https://leetcode.com/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (53.34%)
 * Likes:    341
 * Dislikes: 129
 * Total Accepted:    112.4K
 * Total Submissions: 207.1K
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 * 
 * 
 * 
 * Given an integer n, return the number of distinct solutions to the n-queens
 * puzzle.
 * 
 * Example:
 * 
 * 
 * Input: 4
 * Output: 2
 * Explanation: There are two distinct solutions to the 4-queens puzzle as
 * shown below.
 * [
 * [".Q..",  // Solution 1
 * "...Q",
 * "Q...",
 * "..Q."],
 * 
 * ["..Q.",  // Solution 2
 * "Q...",
 * "...Q",
 * ".Q.."]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    // 这种求一共有多少种走法的题目，第一时间想到可以用DP做，也可以用Backtracking做
    // N 皇后用BackTracking做， BackTracking是有模版套路的
    // Backing Tracking一般要有一个全局变量，存一共有多少种走法，
    // 然后要有一个helper函数，
    // Helper函数要有一个判断走出循环的条件
    // Helper函数要有一个舍弃上一步操作的行为，这个很重要，这个才是backTracking
    let answer = 0;

    // 因为我们会遍历每一层，所以在遍历这一层的时候，当前层是处于一个没有放置皇后的状态，所以不需要检查Row
    const cols = new Array(n).fill(0);

    // 这个是正对角线，一个N*N的棋盘，一共有2*N - 1 条对角线，不信你画画
    const diagonal1 = new Array(2 * n - 1).fill(0);

    // 这个是反对角线，同理，有2*N - 1条， 我们用0表示没有被占用，用1表示被占用
    const diagonal2 = new Array(2 * n - 1).fill(0);

    // 这里面我需要当前所在的行，以及一共有几行，还需要三个数组来判断当前位置能不能放皇后
    const helper = (currentRow, totalRows, cols, diagonal1, diagonal2) => {
      // 这个是循环终止条件，就是我们以及超出了棋盘的行数范围，就说明我们找完了一种放的方法，结果+1
      if (currentRow === totalRows) {
        answer++;
        return;
      } else {// 这里说明我们还没走完棋盘所有的行， 我们要开始在当前行遍历所有的列
        // 这里就是在当前行遍历所有的列，看看当前列能不能放置皇后，
        for (let col = 0; col < totalRows; col++) {
          // 如果当前列不能放置皇后，我们继续遍历下一列
          if (!canPlace(totalRows, currentRow, col, cols, diagonal1, diagonal2)) {
            continue;
          }
          // 如果当前行能放置皇后，那么我们放皇后
          placeQueen(totalRows, currentRow, col, cols, diagonal1, diagonal2);
          // 然后我们往下一行继续搜索，带着更新过的棋盘【就是cols, diagonal1, diagonal2】
          helper(currentRow + 1, totalRows, cols, diagonal1, diagonal2);
          // 这个就是BackTacking要特别注意的地方了，当前行列，可以放置皇后，那么我可以在当前行放置
          // 我同样可以在当前行不放置啊
          // 比如当前是第二行，那么答案中有可能有多种情况，第二行的第三列可以放，如果第二行的第三列不放，那么第二行的第五列就可以放
          // 所以为了考虑第二行可以放置的列的所有情况，我们要把当前列的皇后给去掉，让循环进行到下一列来判断
          removeQueen(totalRows, currentRow, col, cols, diagonal1, diagonal2);
        }
      }
    }

    // 这个就是主函数啦，从第零行开始判断，初始条件是所有的棋盘位置都为0
    helper(0, n, cols, diagonal1, diagonal2);

    return answer;

};

// 这三个你应该能看懂，需要注意的就是，N*N大小的棋盘有2*N - 1个对角线，比如8皇后，就有15条对角线，用0-14来标记
// 正对角线 / 可以标记为row + col, 表示当前格子在第几条对角线上
// 反对角线 \ 可以标记为row - col + N - 1, 比如第0行第7列，就是最右上角的那条对角线， 表示为0， 0 = 0 - 7 + 8 - 1 
const placeQueen = (totalRows, row, col, cols, diagonal1, diagonal2) => {
  cols[col] = 1;
  diagonal1[row + col] = 1;
  diagonal2[row - col + totalRows - 1] = 1;
}

const removeQueen = (totalRows, row, col, cols, diagonal1, diagonal2) => {
  cols[col] = 0;
  diagonal1[row + col] = 0;
  diagonal2[row - col + totalRows - 1] = 0;
}

const canPlace = (totalRows, row, col, cols, diagonal1, diagonal2) => {
  const isCurrentColAvailable = cols[col] === 1;
  const isDiagonal1Available = diagonal1[row + col] === 1;
  const isDiagonal2Available = diagonal2[row - col + totalRows - 1] === 1;

  return !isCurrentColAvailable && !isDiagonal1Available && !isDiagonal2Available;
}


// @lc code=end

