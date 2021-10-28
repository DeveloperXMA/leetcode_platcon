/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (56.52%)
 * Likes:    3212
 * Dislikes: 158
 * Total Accepted:    447.4K
 * Total Submissions: 791.5K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given the root of a binary tree, return all root-to-leaf paths in any
 * order.
 * 
 * A leaf is a node with no children.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [1,2,3,null,5]
 * Output: ["1->2->5","1->3"]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [1]
 * Output: ["1"]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [1, 100].
 * -100 <= Node.val <= 100
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = [];
    
    var helper = (str, node) => {
        if (!node) return;
        if (node) {
          if (!node.left && !node.right) {
            str += '->' + node.val;
            str = str.slice(2);
            result.push(str);
          }
          if (node.left) {
            helper(str + '->' + node.val, node.left);
          }
          if (node.right) {
            helper(str + '->' + node.val, node.right);
          }
        }
    }
    helper('', root);
    return result;
};
// @lc code=end

