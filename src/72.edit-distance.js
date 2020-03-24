/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 *
 * https://leetcode.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (41.27%)
 * Likes:    3071
 * Dislikes: 45
 * Total Accepted:    228.8K
 * Total Submissions: 551.5K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * Given two words word1 and word2, find the minimum number of operations
 * required to convert word1 to word2.
 * 
 * You have the following 3 operations permitted on a word:
 * 
 * 
 * Insert a character
 * Delete a character
 * Replace a character
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * Explanation: 
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: word1 = "intention", word2 = "execution"
 * Output: 5
 * Explanation: 
 * intention -> inention (remove 't')
 * inention -> enention (replace 'i' with 'e')
 * enention -> exention (replace 'n' with 'x')
 * exention -> exection (replace 'n' with 'c')
 * exection -> execution (insert 'u')
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    /**
      看到最大，最小，这样的东西，第一时间想到DP,
      定义DP[i][j], 表示从word1的第i位转换到word2的第j位，所需要的最小步数，其中i 和 j 都是以1开始计算的
      DP[0][0] 就代表空字符串
      
      比如word1 = "abc", word2 = "sde"
      DP[1][2] 表示的是 从"a"到“sd" 转换所需要的最小步数

      如果计算DP[i][j] 时候， 位置上i和j所代表的字符相同，那么
      DP[i][j] = DP[i - 1][j - 1]

      如果他们最后一位不相同，分三种情况
      1. 插入， 比如“ab"  "abc"
      DP[i][j] = DP[i][j - 1] + 1
      2. 删除， 比如 “abc"   "ab"
      DP[i][j] = DP[i - 1][j] + 1
      3. 替换， 比如 “abc" "abd"
      DP[i][j] = DP[i - 1][j - 1] + 1
    */

    let len1 = word1.length;
    let len2 = word2.length;
    let dp = [...Array(len1 + 1)].map(() => new Array(len2 + 1));

    // 这一步表示 从“ABC” 到 “”要多少步，每一步都是一个删除，所以这样初始化
    for (let i = 0; i <= len1; i++) {
      dp[i][0] = i;
    }

    // 我们还要表示“” 到 “abc"要多少步，每一步都是一个增加，
    for (let i = 0; i <= len2; i++) {
      dp[0][i] = i;
    }

    for (let i = 1; i <= len1; i++ ) {
      for (let j = 1; j <= len2; j++) {
        //如果最后字符相等
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
      }
    }
    return dp[len1][len2];
};
// @lc code=end

