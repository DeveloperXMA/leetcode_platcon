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
<<<<<<< HEAD
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
};
=======
    nums.sort((a,b) => (a - b));
    let result = [];
    backTrack(nums, result, [], 0);
    console.log(result);
};

var backTrack = function(nums, result, tempArray) {
  if (tempArray.length === nums.length) {
    result.push([...tempArray]);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (tempArray.includes(nums[i])) continue;
      tempArray.push(nums[i]);
      backTrack(nums, result, tempArray);
      tempArray.pop();
    }
  }
}

>>>>>>> 99d66524922b43a638d8ea9f8de354ab7b267a5e
