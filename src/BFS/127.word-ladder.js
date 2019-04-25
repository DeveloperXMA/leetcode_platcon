/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return false;
  }

  let beginSet = new Set([beginWord]);
  let endSet = new Set([endWord]);
  let visited = new Set([endWord]);
  
  let level = 1;
  
  while (beginSet.size > 0 && endSet.size > 0) {
      if (beginSet.size > endSet.size) {
          let swap = endSet;
          endSet = beginSet;
          beginSet = swap;
      }
      let newBeginSet = new Set();
      for (let word of beginSet.values()) {
          for (let i = 0; i < word.length; i++) {
              for (let key = 0; key < 26; key++) {
                  let newChar = String.fromCharCode(97 + key);
                  let newWord = word.slice(0, i) + newChar + word.slice(i+1);
                  if (endSet.has(newWord)) {
                      return level + 1;
                  }
                  if (!visited.has(newWord) && wordList.includes(newWord)) {
                      visited.add(newWord);
                      newBeginSet.add(newWord);
                  }
              }
          }
      }
      beginSet = newBeginSet;
      level++;
  }
  return 0;
};


