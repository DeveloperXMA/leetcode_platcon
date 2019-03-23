/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  let beginSet = new Set([beginWord]);
  let visited = new Set();
  results = [];
  currentPath = [beginWord];
  dfs(beginSet, endWord, wordList, visited, currentPath, results);
  return results;
};

var dfs = function(beginSet, endWord, wordList, visited, currentPath, results) {
  for (let word of beginSet.values()) {
      let newBeginSet = new Set();
      for (let i = 0; i < word.length; i++) {
          for (let key = 0; key < 26; key++) {
              let newChar = String.fromCharCode(key + 97);
              let newWord = word.slice(0, i) + newChar + word.slice(i + 1);
              if (!visited.has(newWord) && wordList.includes(newWord)) {
                  currentPath = [...currentPath, newWord];
                  visited.add(newWord);
                  newBeginSet.add(newWord);
                  if (newWord === endWord) {
                      results.push(currentPath);
                      return;
                  } else {
                    dfs(newBeginSet, endWord, wordList, visited, currentPath, results);
                  }
              }
          }
      }
  }
}

findLadders("hi", "co", ["ci", "co"])
