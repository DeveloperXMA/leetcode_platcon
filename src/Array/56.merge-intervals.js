/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0 || intervals.length === 1) {
      return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let results = [];
    let index = 0;
    while (index < intervals.length) {
      let start = intervals[index][0];
      let end = intervals[index][1];
      while (intervals[index] && intervals[index][0] <= end) {
        end = Math.max(end, intervals[index][1]);
        index++;
      }
      results.push([start, end]);
    }
    return results;
};

