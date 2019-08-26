/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
 * @return {number}
 */
var maxPathSum = function(root) {
  let maxPath = Number.MIN_SAFE_INTEGER;

  // 这个dfs是用来取包含root的一个直上直下的路径的函数
  function dfs (root) {
    if (root === null) return 0;
    let left = Math.max(0, dfs(root.left));
    let right = Math.max(0, dfs(root.right));
    // 这个才是真正求maxPath的过程
    maxPath = Math.max(maxPath, root.val + left + right);
    return Math.max(left,right) + root.val;
  }
  dfs(root);
  return maxPath;
};

