/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let firstSmallThanRight = -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      firstSmallThanRight = i;
      break;
    }
  }
  if (firstSmallThanRight === -1) {
    reverse(nums, 0, nums.length - 1);
    return;
  }

  for (let i = nums.length - 1; i > firstSmallThanRight; i--) {
    if (nums[i] > nums[firstSmallThanRight]) {
      swap(nums, i, firstSmallThanRight);
      break;
    }
  }
  reverse(nums, firstSmallThanRight + 1, nums.length - 1);
};

const swap = (nums, i, j) => {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

const reverse = (nums, begin, end) => {
  for (; begin < end; begin++, end--) {
    swap(nums, begin, end);
  }
}

