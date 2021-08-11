/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (35.48%)
 * Likes:    2013
 * Dislikes: 155
 * Total Accepted:    343.4K
 * Total Submissions: 965.6K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 * 
 * 
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into
 * [1,6].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * 
 * NOTE: input types have been changed on April 15, 2019. Please reset to
 * default code definition to get new method signature.
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) {
      return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let index = 0;
    let results = [];
    while (index < intervals.length) {
      let start = intervals[index][0];
      let end = intervals[index][1];
      while(intervals[index] && intervals[index][0] <= end ) {
        end = Math.max(end, intervals[index][1]);
        index++;
      }
      results.push([start, end]);
    }
    return results;
};
// @lc code=end

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  intervals.sort((a,b) => {
      return a[0] - b[0];
  });
  if (intervals.length === 1) return [[...intervals[0]]];
  let low = intervals[0][0];
  let high = intervals[0][1];
  const result = [];
  for (let index = 1; index < intervals.length; index++) {
      // 第二个线段右端被当前线段包围
      if (intervals[index][1] <= high) continue;
      // 第二个线段的左端比当前线段右边还高
      if (intervals[index][0] > high) {
          result.push([low, high]);
          low = intervals[index][0];
          high = intervals[index][1];
          continue;
      }
      // 当以上两个条件都不满足，那么
      high = intervals[index][1];
  }
  result.push([low, high]);
  return result;
};