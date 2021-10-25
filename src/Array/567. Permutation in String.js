// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

// Solution 1

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
  const array = new Array(26).fill(0);
  for (let o of s1) {
      let index = o.charCodeAt(0) - 97;
      array[index]++;
  }
  
  let map = new Map();
  for (let char of s1) {
      if (map.has(char)) {
          map.set(char, map.get(char) + 1);
      } else {
          map.set(char, 1);
      }
  }
  
  for (let i = 0; i <= s2.length - s1.length; i++) {
      if (map.has(s2[i])) {
          if (isAnagram(array, s2.slice(i, i + s1.length))) {
              return true;
          }
      }
  }
  return false;
};

var isAnagram = function(array, t) {
  let foo = [...array];
  for (let m of t) {
      let index = m.charCodeAt(0) - 97;
      foo[index]--;
  }
  for (let i = 0; i < 26; i++) {
      if (foo[i] !== 0) {
          return false;
      }
  }
  return true;
};


// Solution 2

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
   How do we know string p is a permutation of string s? Easy, each character in p is in s too. 
   So we can abstract all permutation strings of s to a map (Character -> Count). 
   i.e. abba -> {a:2, b:2}. 
   Since there are only 26 lower case letters in this problem, we can just use an array to represent the map.
   
   How do we know string s2 contains a permutation of s1? We just need to create a sliding window with length of s1, 
   move from beginning to the end of s2. When a character moves in from right of the window, 
   we subtract 1 to that character count from the map. When a character moves out from left of the window, 
   we add 1 to that character count. 
   So once we see all zeros in the map, meaning equal numbers of every characters between s1 and the substring in the sliding window, we know the answer is true.
 */
var checkInclusion = function(s1, s2) {
  if (s2.length < s1.length) return false;
  
  const array = new Array(26).fill(0);
  for (let o of s1) {
      let index = o.charCodeAt(0) - 97;
      array[index]++;
  }
  
  for (let k = 0; k < s1.length; k++) {
      let charIndex = s2[k].charCodeAt(0) - 97;
      array[charIndex]--;
  }
  
  if (isZero(array)) {
      return true;
  }
  let i,j;
  for (i = 0; i < s2.length - s1.length; i++) {
      j = i + s1.length;
      let charIndex = s2[i].charCodeAt(0) - 97;
      array[charIndex]++;
      charIndex = s2[j].charCodeAt(0) - 97;
      array[charIndex]--;
      if (isZero(array)) {
          return true;
      }
      
  }
  return false;
};

var isZero = function(array) {
  for (let i = 0; i < 26; i++) {
      if (array[i] !== 0) {
          return false;
      }
  }
  return true;
};