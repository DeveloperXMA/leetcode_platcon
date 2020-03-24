/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (46.83%)
 * Likes:    5741
 * Dislikes: 105
 * Total Accepted:    436.9K
 * Total Submissions: 931.2K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * 
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 * 
 * Example:
 * 
 * 
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 双指针做，看看就懂了
    if (height === null || height.length === 0) return 0;
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let result = 0;
    while (left < right) {
      if (height[left] < height[right]) {
        leftMax = Math.max(height[left], leftMax);
        result += leftMax - height[left];
        left++;
      } else {
        rightMax = Math.max(height[right], rightMax);
        result += rightMax - height[right];
        right--;
      }
    }
    return result;
};
// @lc code=end

