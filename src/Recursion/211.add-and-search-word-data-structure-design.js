/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Add and Search Word - Data structure design
 *
 * https://leetcode.com/problems/add-and-search-word-data-structure-design/description/
 *
 * algorithms
 * Medium (32.49%)
 * Likes:    1384
 * Dislikes: 73
 * Total Accepted:    157.1K
 * Total Submissions: 456.7K
 * Testcase Example:  '["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]'
 *
 * Design a data structure that supports the following two operations:
 * 
 * 
 * void addWord(word)
 * bool search(word)
 * 
 * 
 * search(word) can search a literal word or a regular expression string
 * containing only letters a-z or .. A . means it can represent any one
 * letter.
 * 
 * Example:
 * 
 * 
 * addWord("bad")
 * addWord("dad")
 * addWord("mad")
 * search("pad") -> false
 * search("bad") -> true
 * search(".ad") -> true
 * search("b..") -> true
 * 
 * 
 * Note:
 * You may assume that all words are consist of lowercase letters a-z.
 * 
 */

// @lc code=start
var TreeNode = function (val) {
  this.val = val;
  this.map = new Map();
  this.isComplete = false;
}

/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.root = new TreeNode(null);
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let curr = this.root;
  for (let i = 0; i < word.length; i++) {
    if (curr.map.has(word[i])) {
      curr = curr.map.get(word[i]);
    } else {
      curr.map.set(word[i], new TreeNode(word[i]));
      curr = curr.map.get(word[i]);
    }
    if (i + 1 === word.length) {
      curr.isComplete = true;
    }
  }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  var helper = function (node, word) {
    if (node === null) return false;
    if (word.length === 0) return node.isComplete;
    if (word[0] === '.') {
      let children = node.map.values();
      let res = false;
      for (let child of children) {
        res = res || helper(child, word.slice(1));
      }
      return res;
    } else {
      if (node.map.has(word[0])) {
        return helper(node.map.get(word[0]), word.slice(1));
      } else {
        return false;
      }
    }
  }
  return helper(this.root, word);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

