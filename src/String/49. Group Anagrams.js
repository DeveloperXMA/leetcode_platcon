// https://leetcode.com/problems/group-anagrams/
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lower-case English letters.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function(strs) {
  const result = {};
  const ans = [];
  for (let str of strs) {
      let temp = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

      for (let char of str) {
          let index = char.charCodeAt() - 97;
          temp[index]++;
      }
      let foo = temp.join('a'); // Join for sepearate 1,0 and 10, so 1,0 would be 1a0a, 10 would be 10a
      if (result[foo]) {
          result[foo].push(str);
      } else {
          result[foo] = [str];
      }
  }
  
  for (let key in result) {
      ans.push(result[key]);
  }
  
  return ans;
};