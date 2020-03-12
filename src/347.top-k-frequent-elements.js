/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (58.91%)
 * Likes:    2412
 * Dislikes: 162
 * Total Accepted:    319K
 * Total Submissions: 540.8K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * Given a non-empty array of integers, return the k most frequent elements.
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 * 
 * Note: 
 * 
 * 
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Your algorithm's time complexity must be better than O(n log n), where n is
 * the array's size.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  let obj = {};
  let result = [];
  for (let number of nums) {
      obj[number] = obj[number] ? obj[number] + 1 : 1;
  }
  keys = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  for (let i = 0; i < k; i++) {
      result.push(keys[i]);
  }
  return result;
};
// @lc code=end

