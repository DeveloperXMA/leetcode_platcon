/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 *
 * https://leetcode.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (30.76%)
 * Likes:    2704
 * Dislikes: 726
 * Total Accepted:    289.6K
 * Total Submissions: 939.2K
 * Testcase Example:  '[1,2,0]'
 *
 * Given an unsorted integer array, find the smallest missing positive
 * integer.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,0]
 * Output: 3
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,4,-1,1]
 * Output: 2
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [7,8,9,11,12]
 * Output: 1
 * 
 * 
 * Note:
 * 
 * Your algorithm should run in O(n) time and uses constant extra space.
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if (nums === null || nums.length === 0) {
      return 1;
    }
    for (let i = 0; i < nums.length; i++) {
      while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
        [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]];
      }
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        return i + 1;
      }
    }
    return nums.length + 1;
};
// @lc code=end

var isAlienSorted = function(words, order) {
  words = words.map((word) => {
      let newArray = [];
      for (let i = 0; i < word.length; i++) {
          newArray[i] = order.indexOf(word[i]);
      }
      return newArray;
  });
  for (let i = 0; i < words.length - 1; i++) {
      let word1 = words[i];
      let word2 = words[i + 1];
      
      for (let k = 0; k < Math.min(word1.length, word2.length); k++) {
          if (word1[k] === word2[k]) continue;
          if (word1[k] > word2[k]) return false;
          if (word1[k] < word2[k]) break;
      }
      if (word1.length > word2.length) {
          return false;
      }
  }
  return true;
};

isAlienSorted(["kuvp","q"], "ngxlkthsjuoqcpavbfdermiywz");