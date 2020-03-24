/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (47.94%)
 * Likes:    853
 * Dislikes: 163
 * Total Accepted:    251.8K
 * Total Submissions: 519.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the bottom-up level order traversal of its
 * nodes' values. (ie, from left to right, level by level from leaf to root).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its bottom-up level order traversal as:
 * 
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let queue = [];
    let result = [];
    if (root === null) {
      return [];
    }
    queue.unshift(root);
    while(queue.length > 0) {
      let length = queue.length;
      let currentLevel = [];
      for (let i = 0; i < length; i++) {
        let node = queue.pop();
        currentLevel.push(node.val);
        if (node.left) {
          queue.unshift(node.left);
        }
        if (node.right) {
          queue.unshift(node.right);
        }
      }
      result.unshift(currentLevel);
    }
    return result;
};

