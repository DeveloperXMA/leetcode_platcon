/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 *
 * https://leetcode.com/problems/implement-trie-prefix-tree/description/
 *
 * algorithms
 * Medium (43.84%)
 * Likes:    2425
 * Dislikes: 44
 * Total Accepted:    246.8K
 * Total Submissions: 558.6K
 * Testcase Example:  '["Trie","insert","search","search","startsWith","insert","search"]\n[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]'
 *
 * Implement a trie with insert, search, and startsWith methods.
 * 
 * Example:
 * 
 * 
 * Trie trie = new Trie();
 * 
 * trie.insert("apple");
 * trie.search("apple");   // returns true
 * trie.search("app");     // returns false
 * trie.startsWith("app"); // returns true
 * trie.insert("app");   
 * trie.search("app");     // returns true
 * 
 * 
 * Note:
 * 
 * 
 * You may assume that all inputs are consist of lowercase letters a-z.
 * All inputs are guaranteed to be non-empty strings.
 * 
 * 
 */

 var Node = function (val) {
  this.val = val;
  this.map = new Map();
  this.isComplete = false;
}

/**
* Initialize your data structure here.
*/
var Trie = function() {
  this.root = new Node(null);
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let curr = this.root;
  for (let character of word) {
      if (curr.map.has(character)) {
          curr = curr.map.get(character);
      } else {
          curr.map.set(character, new Node(character));
          curr = curr.map.get(character);
      }
  }
  curr.isComplete = true;
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let curr = this.root;
  for (let character of word) {
      if (curr.map.has(character)) {
          curr = curr.map.get(character);
      } else {
          return false;
      }
  }
  return curr.isComplete;
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let curr = this.root;
  for (let character of prefix) {
      if (curr.map.has(character)) {
          curr = curr.map.get(character);
      } else {
          return false;
      }
  }
  if (curr) return true;
  return false;
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/
// @lc code=end

