/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (32.73%)
 * Total Accepted:    385.7K
 * Total Submissions: 1.2M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 * 
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * 
 * You are given a target value to search. If found in the array return its
 * index, otherwise return -1.
 * 
 * You may assume no duplicate exists in the array.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// The key idea is to use binary search in some part of array
// if you split the array into half, there must be half of the array is sorted

var search = function(nums, target) {
    if (nums.length === 0 || nums === null) return -1;
    let start = 0;
    let end = nums.length - 1;

    // stop conditioin is when there is only three item in the current array
    // [4        7         9]
    // start    mid       end
    // You will know the answer becuase eventually
    // You will check mid, start, end value === target

    while (start + 1 < end) {
      let mid = Math.floor((start + end) / 2);

      if (nums[mid] === target) return mid;

      // Check if the first half of array is sorted
      if (nums[start] < nums[mid]) {
        // if the target is in the range of sorted array
        if (target < nums[mid] && target >= nums[start]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else {
        // This is the case second half array is sorted

        // If the target is in the range of second half
        if (target > nums[mid] && target <= nums[end]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
    if (nums[start] === target) return start;
    if (nums[end] === target) return end;
    return -1;
};

