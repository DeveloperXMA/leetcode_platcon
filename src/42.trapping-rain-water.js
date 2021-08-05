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

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (!height || height.length === 0) return 0;
  // 这道题的核心思路是，在位置I能乘的水为，Math.min(左边最高的，右边最高的) - height[i], 当然注意这个要大于0    
  // 然后对每一个位置，我们需要知道它左边最高的格子有多高，右边最高的格子又有多高。
  // 我们可以用LP[i]来记录i左边最高的格子，RP[i]来记录i右边最高的格子， 得出来这个需要O(n)
  // 我们还可以用双指针，其实就是对DP[i]的一个优化。 比如要是左边最高的比右边的指针所指的位置要矮，那么根据短板原理，我们不需要知道右边最高的是什么，我们已经知道了Math.min(左边最高的，右边最高的) = 左边最高的， 所以这一步可以简化，
  let left = 0, right = height.length - 1;
  let leftH = 0, rightH = 0;
  let sum = 0;
  while (left < right) {
      leftH = Math.max(height[left], leftH);
      rightH = Math.max(height[right], rightH);
      if (leftH < height[right]) {
          sum += leftH - height[left];
          left++;
      } else {
          sum += rightH - height[right];
          right--;
      }
  }
  return sum;
};
// @lc code=end

