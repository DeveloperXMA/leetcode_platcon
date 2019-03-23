/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */
/**
 * 
 * @description Giving a string S and T, find the minimum window in S which will contain all the characters in T in O(n)
 * Using sliding window, i, j start from beginning,
 * expand j until it meet the condition, then move i to next index until it didn't meet the condition.
 * end the loop if j reach the end of string S
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (t.length > s.length || s.length === 0 ) {
    return "";
  }
  let map = new Map();
  for (let letter of t) {
    map.set(letter, map.get(letter) ? map.get(letter) + 1 : 1);
  }
  let i = 0, j = 0;

  let answer = "";
  let result = "";

  // move i to the first valid letter that in string T
  while (i < s.length && !map.has(s.charAt(i))) {
    i++;
  }

  while (i< s.length && j < s.length) {
    let charAtJ = s.charAt(j);
    if (map.has(charAtJ)) {
      map.set(charAtJ, map.get(charAtJ) - 1);

      // If current string between i and j meet condition,
      if (isCovered(map)) {
        do {
          answer = s.slice(i, j + 1);
          if (result === "") {
            result = answer;
          } else {
            result = result.length <= answer.length ? result : answer;
          }
          map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
          i++; // Move i to next right
        } while (isCovered(map)) // until condition is not meet.
        j++; // then we move j to the next right.
      } else {
        j++; // if we can't satifisy the condition, move j to next right
      }
    } else {
      j++; // if current letter at index j didn't in string T, move j to next right.
    }
  }
  return result;
};

var isCovered = (map) => {
  for (let value of map.values()) {
    if (value > 0) {
      return false;
    }
  }
  return true;
}
