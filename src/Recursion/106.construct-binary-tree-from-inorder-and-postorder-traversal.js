/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (38.42%)
 * Total Accepted:    145.2K
 * Total Submissions: 377.9K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 * 
 * Note:
 * You may assume that duplicates do not exist in the tree.
 * 
 * For example, given
 * 
 * 
 * inorder = [9,3,15,20,7]
 * postorder = [9,15,7,20,3]
 * 
 * Return the following binary tree:
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (postorder.length === 0) {
    return null;
  }
  let val = postorder[postorder.length - 1];
  let root = new TreeNode(val);
  let indexOfRoot = inorder.indexOf(val);
  let inorderLeft = inorder.slice(0, indexOfRoot);
  let leftLength = inorderLeft.length;
  let inorderRight = inorder.slice(indexOfRoot + 1);
  let rightLength = inorderRight.length;
  let postorderLeft = postorder.slice(0, leftLength);
  let postorderRight = postorder.slice(leftLength, leftLength + rightLength);
  root.left = buildTree(inorderLeft, postorderLeft);
  root.right = buildTree(inorderRight, postorderRight);
  return root;
};

