/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 *
 * https://leetcode.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (49.65%)
 * Likes:    2731
 * Dislikes: 103
 * Total Accepted:    260.6K
 * Total Submissions: 519.1K
 * Testcase Example:  '3'
 *
 * Given n, how many structurally unique BST's (binary search trees) that store
 * values 1 ... n?
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output: 5
 * Explanation:
 * Given n = 3, there are a total of 5 unique BST's:
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let DP = [...Array(n + 1)].fill(0);
    
  DP[0] = 1;
  DP[1] = 1;
  console.log(DP)
  for (let i = 2; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
          DP[i] += DP[j - 1] * DP[i - j];
      }
  }
  return DP[n];
};
// @lc code=end

