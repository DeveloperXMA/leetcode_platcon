/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (42.99%)
 * Total Accepted:    374.7K
 * Total Submissions: 871.6K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric
 * around its center).
 * 
 * 
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * But the following [1,2,2,null,3,null,3]  is not:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const helper = (left, right) => {
      if (!left && !right) return true;
      if (!left && right) return false;
      if (left && !right) return false;
      if (left.val !== right.val) return false;

      return helper(left.left, right.right) && helper(left.right, right.left);
    }
    return helper(root, root);
};

