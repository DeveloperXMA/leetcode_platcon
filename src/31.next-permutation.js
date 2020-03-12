/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums === null || nums.length === 0) return;
  let firstSmall = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] < nums[i + 1]) {
          firstSmall = i;
          break;
      }
  }
  if (firstSmall === -1) {
      reverse(nums, 0, nums.length - 1);
      return;
  }
  
  let firstLarge = -1;
  for (let i = nums.length - 1; i > firstSmall; i--) {
      if (nums[i] > nums[firstSmall]) {
          firstLarge = i;
          break;
      }
  }
  swap(nums,firstSmall, firstLarge);
  reverse(nums, firstSmall + 1, nums.length - 1);
  return;
};

var swap = function (nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

var reverse = function (nums, start, end) {
  while (start <= end) {
      swap(nums, start++, end--);
  }
}
