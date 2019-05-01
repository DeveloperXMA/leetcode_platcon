/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // Using sliding window + hashTable, hashTable store the index of char
  let answer = 0;
  let i = 0, j = 0;
  let map = new Map();
  for (;i < s.length, j < s.length; ) {
      if (map.has(s.charAt(j))) {
          i = Math.max(map.get(s.charAt(j)) + 1, i);
      }
      map.set(s.charAt(j), j);
      answer = Math.max(answer, j - i + 1);
      j++;
  }
  return answer;
};


