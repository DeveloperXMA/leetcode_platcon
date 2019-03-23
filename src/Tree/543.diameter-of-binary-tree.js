/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    function getDiameterForNode(root) {
      if (root === null) {
        return 0;
      }
      const left = getDiameterForNode(root.left);
      const right = getDiameterForNode(root.right);
      maxDiameter = Math.max(maxDiameter, left + right);
      return 1 + Math.max(left, right);
    }
    getDiameterForNode(root);
    return maxDiameter;
};

