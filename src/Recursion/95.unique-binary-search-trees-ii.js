/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 *
 * https://leetcode.com/problems/unique-binary-search-trees-ii/description/
 *
 * algorithms
 * Medium (35.27%)
 * Likes:    1542
 * Dislikes: 129
 * Total Accepted:    157.3K
 * Total Submissions: 420.9K
 * Testcase Example:  '3'
 *
 * Given an integer n, generate all structurally unique BST's (binary search
 * trees) that store values 1 ... n.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output:
 * [
 * [1,null,3,2],
 * [3,2,null,1],
 * [3,1,null,null,2],
 * [2,1,3],
 * [1,null,2,null,3]
 * ]
 * Explanation:
 * The above output corresponds to the 5 unique BST's shown below:
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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if ( n === 0) return [];
    const generateSubtrees = (min, max) => {
      let results = [];
      if (min > max) {
        return [null];
      }
      for (let i = min; i <= max; i++) {
        const leftSubtrees = generateSubtrees(min, i - 1);
        const rightSubtrees = generateSubtrees(i+1, max);
        for (let l of leftSubtrees) {
          for (let r of rightSubtrees) {
            const root = new TreeNode(i);
            root.left = l;
            root.right = r;
            results.push(root);
          }
        }
      }
      return results;
    }
    return generateSubtrees(1, n);
};
// @lc code=end

