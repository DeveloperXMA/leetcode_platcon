/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let distance = Number.MAX_SAFE_INTEGER;
    let i = 0;
    let answer;
    nums.sort((a, b) => (a - b));
    for (; i < nums.length - 2; i++) {
      let j = i + 1, k = nums.length - 1;
      while (j < k) {
        const sum = nums[i] + nums[j] + nums[k];
        if (distance > Math.abs(sum - target)) {
          distance = Math.abs(sum - target);
          answer = sum;
        }
        if (sum === target) {
          return sum;
        } else if (sum < target) {
          j++;
        } else {
          k--;
        }
      }
    }
    return answer;
};

