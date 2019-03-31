/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (40.01%)
 * Total Accepted:    208.4K
 * Total Submissions: 520.8K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 * 
 * Note:
 * You may assume that duplicates do not exist in the tree.
 * 
 * For example, given
 * 
 * 
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
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
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) return null;
  let val = preorder[0];
  let root = new TreeNode(val);
  let indexOfRoot = inorder.indexOf(val);
  let leftInorder = inorder.slice(0, indexOfRoot);
  let rightInorder = inorder.slice(indexOfRoot + 1);
  let leftLength = leftInorder.length;
  let rightLength = rightInorder.length;
  let leftPreOrder = preorder.slice(1, 1 + leftLength);
  let rightPreOrder = preorder.slice(1 + leftLength);
  root.left = buildTree(leftPreOrder, leftInorder);
  root.right = buildTree(rightPreOrder, rightInorder);
  return root;
};

