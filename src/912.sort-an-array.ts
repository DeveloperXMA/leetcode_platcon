/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 *
 * https://leetcode.com/problems/sort-an-array/description/
 *
 * algorithms
 * Medium (62.62%)
 * Likes:    278
 * Dislikes: 197
 * Total Accepted:    53.7K
 * Total Submissions: 85.8K
 * Testcase Example:  '[5,2,3,1]'
 *
 * Given an array of integers nums, sort the array in ascending order.
 * 
 * 
 * Example 1:
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 * Example 2:
 * Input: nums = [5,1,1,2,0,0]
 * Output: [0,0,1,1,2,5]
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 50000
 * -50000 <= nums[i] <= 50000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const bubbleSort = function(nums) {
    if (nums === null) return [];
    if (nums.length < 2) return nums;

    /**
     Bubble Sort
     Optimized Implementation:
     The above function always runs O(n^2) time even if the array is sorted. 
     It can be optimized by stopping the algorithm if inner loop didn’t cause any swap.
     */
    for (let i = nums.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (nums[j] > nums[j + 1]) {
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        }
      }
    }
    return nums;
};

bubbleSort([3,2,4,6])


/**
 * @description Quick Sort, 
 * @description O(Nlog(N)), worst case O(N^2) average O(Nlog(N))
 * @param {number[]} nums 
 */
export const quickSort = function (nums) {
  if (nums === null) return [];
  if (nums.length <= 1) {
    return nums;
  }
  // We always choose first element in the array as pivot, or whatever you like
  const [pivot, ...rest] = nums;
  const left = [], right = [];
  rest.forEach(el => {
    el < pivot ?
    left.push(el) : right.push(el)
  })
  return quickSort(left).concat([pivot]).concat(quickSort(right));
}
// @lc code=end

// quickSort([5,2,3,1])