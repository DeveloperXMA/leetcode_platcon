/*
 * @lc app=leetcode id=449 lang=javascript
 *
 * [449] Serialize and Deserialize BST
 *
 * https://leetcode.com/problems/serialize-and-deserialize-bst/description/
 *
 * algorithms
 * Medium (46.14%)
 * Total Accepted:    52.2K
 * Total Submissions: 113.1K
 * Testcase Example:  '[2,1,3]'
 *
 * Serialization is the process of converting a data structure or object into a
 * sequence of bits so that it can be stored in a file or memory buffer, or
 * transmitted across a network connection link to be reconstructed later in
 * the same or another computer environment.
 * 
 * Design an algorithm to serialize and deserialize a binary search tree. There
 * is no restriction on how your serialization/deserialization algorithm should
 * work. You just need to ensure that a binary search tree can be serialized to
 * a string and this string can be deserialized to the original tree
 * structure.
 * 
 * The encoded string should be as compact as possible.
 * 
 * Note: Do not use class member/global/static variables to store states. Your
 * serialize and deserialize algorithms should be stateless.
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let result = "";
    function buildStr(root) {
      if (!node) {
        result += '#';
      } else {
        result += root.val;
        buildStr(root.left);
        buildStr(root.right);
      }
    }
    buildStr(root);
    return result;
};

let index = 0;

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data[index] === '#' || index >= data.length) {
    index++;
    return null;
  }

    let node = new TreeNode(data[index]);
    index++;
    node.left = deserialize(data);
    node.right = deserialize(data);
    return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

