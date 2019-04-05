/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 *
 * https://leetcode.com/problems/subarray-sum-equals-k/description/
 *
 * algorithms
 * Medium (41.85%)
 * Total Accepted:    89.1K
 * Total Submissions: 213K
 * Testcase Example:  '[1,1,1]\n2'
 *
 * Given an array of integers and an integer k, you need to find the total
 * number of continuous subarrays whose sum equals to k.
 * 
 * Example 1:
 * 
 * Input:nums = [1,1,1], k = 2
 * Output: 2
 * 
 * 
 * 
 * Note:
 * 
 * The length of the array is in range [1, 20,000].
 * The range of numbers in the array is [-1000, 1000] and the range of the
 * integer k is [-1e7, 1e7].
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  /**
* @param {number[]} nums
* @param {number} k
* @return {number}
*/
  let preSumArray = new Array(nums.length + 1);
  // Key idea is if we want to calculate the sum between i and j
  // we can use the preSumArray[j + 1] - preSumArray[i]
  // length + 1 is because we want to consider the case sum start from nums[0]
  // for example 
  //   0   1   2   3
  // [-2, -1,  2,  1]
  //  if we want to calculate the sum from i to j
  // take i = 1, j = 3 as example
  // -1 + 2 + 1 = 2
  // if we make nums[i - 1] = nums[0] + nums[1] + nums[2] + ... + nums[i - 1]
  //            nums[j]     = nums[0] + nums[1] + nums[2] + ... + nums[i - 1] + nums[i] + ... + nums[j] 
  // the sum between i and j in original nums array is nums[j] - nums[ i - 1] ;
  // notice i - 1, if i === 0, index out of bound, so we add a 0 to the head of array,
  // the preSumArray will become
  // [0,  -2,  -3, -1,  0]
  // if we want to get i to j's sum in original array
  // we can then use preSum[j + 1] - preSum[i]
  // preSum[j + 1] = preSum[3 + 1] = 0;
  // preSum[i] = preSum[1] = -2;
  // sum = 0 - (-2) = 2  
  // take this to the original array -1 + 2 + 1 = 2;

  preSumArray[0] = 0;
  for (let i = 1; i < preSumArray.length; i++) {
    preSumArray[i] = preSumArray[i - 1] + nums[i - 1];
  }
  let count = 0;

  for (let i = 0; i < preSumArray.length; i++) {
    for (let j = i; j + 1 < preSumArray.length; j++) {
      let currentSum = preSumArray[j + 1] - preSumArray[i];
      if (currentSum === k) {
        count++;
      }
    }
  }
  return count; 
};

