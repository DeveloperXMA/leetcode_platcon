/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 *
 * https://leetcode.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (31.66%)
 * Likes:    1280
 * Dislikes: 146
 * Total Accepted:    220.6K
 * Total Submissions: 677.8K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * Given a set of non-overlapping intervals, insert a new interval into the
 * intervals (merge if necessary).
 * 
 * You may assume that the intervals were initially sorted according to their
 * start times.
 * 
 * Example 1:
 * 
 * 
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with
 * [3,5],[6,7],[8,10].
 * 
 * NOTE: input types have been changed on April 15, 2019. Please reset to
 * default code definition to get new method signature.
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  if (newInterval.length === 0) return [intervals];
  let results = [];
  let i = 0;
  
  let intervalStart = newInterval[0];
  let intervalEnd = newInterval[newInterval.length - 1];
  
  while (i < intervals.length && intervals[i][intervals[i].length - 1] < intervalStart) {
      results.push(intervals[i++]);
  }
  while (i < intervals.length && intervals[i][0] <= intervalEnd) {
      intervalStart = Math.min(intervals[i][0], intervalStart);
      intervalEnd = Math.max(intervals[i][intervals[i].length - 1], intervalEnd);
      i++;
  }
  results.push([intervalStart, intervalEnd]);
  while (i < intervals.length) {
      results.push(intervals[i++]);
  }
  return results;
  
};

insert([[1,5]],[6,8]);
// @lc code=end

