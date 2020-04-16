/*
 * @lc app=leetcode id=863 lang=javascript
 *
 * [863] All Nodes Distance K in Binary Tree
 *
 * https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/
 *
 * algorithms
 * Medium (52.86%)
 * Likes:    1625
 * Dislikes: 37
 * Total Accepted:    61K
 * Total Submissions: 114.1K
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n2'
 *
 * We are given a binary tree (with root node root), a target node, and an
 * integer value K.
 * 
 * Return a list of the values of all nodes that have a distance K from the
 * target node.  The answer can be returned in any order.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2
 * 
 * Output: [7,4,1]
 * 
 * Explanation: 
 * The nodes that are a distance 2 from the target node (with value 5)
 * have values 7, 4, and 1.
 * 
 * 
 * 
 * Note that the inputs "root" and "target" are actually TreeNodes.
 * The descriptions of the inputs above are just serializations of these
 * objects.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The given tree is non-empty.
 * Each node in the tree has unique values 0 <= node.val <= 500.
 * The target node is a node in the tree.
 * 0 <= K <= 1000.
 * 
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
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
  if (root === null || target === null) return [];
    
  const addParent = (root) => {
    if (root === null) return;
    if (root.left) {
      root.left.parent = root;
      addParent(root.left);
    }
    if (root.right) {
      root.right.parent = root;
      addParent(root.right);
    }
  }
  addParent(root);
  let queue = [];
  queue.push(target);
  let ans = [];
  while (queue.length > 0 && K >= 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.pop();
      curr.visited = true;
      if (K === 0) {
        ans.push(curr.val);
      }
      
      if (curr.left && !curr.left.visited) {
        curr.left.visited = true;
        queue.unshift(curr.left);
      }
      if (curr.right && !curr.right.visited) {
        curr.right.visited = true;
        queue.unshift(curr.right);
      }
      if (curr.parent && !curr.parent.visited) {
        curr.parent.visited = true;
        queue.unshift(curr.parent);
      }
    }
    K--;
  }
  return ans;
};
// @lc code=end

