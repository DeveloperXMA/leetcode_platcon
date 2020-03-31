/*
 * @lc app=leetcode id=1031 lang=javascript
 *
 * [1031] Maximum Sum of Two Non-Overlapping Subarrays
 *
 * https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/description/
 *
 * algorithms
 * Medium (56.18%)
 * Likes:    430
 * Dislikes: 24
 * Total Accepted:    15.2K
 * Total Submissions: 27K
 * Testcase Example:  '[0,6,5,2,2,5,1,9,4]\n1\n2'
 *
 * Given an array A of non-negative integers, return the maximum sum of
 * elements in two non-overlapping (contiguous) subarrays, which have lengths L
 * and M.  (For clarification, the L-length subarray could occur before or
 * after the M-length subarray.)
 * 
 * Formally, return the largest V for which V = (A[i] + A[i+1] + ... +
 * A[i+L-1]) + (A[j] + A[j+1] + ... + A[j+M-1]) and either:
 * 
 * 
 * 0 <= i < i + L - 1 < j < j + M - 1 < A.length, or
 * 0 <= j < j + M - 1 < i < i + L - 1 < A.length.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: A = [0,6,5,2,2,5,1,9,4], L = 1, M = 2
 * Output: 20
 * Explanation: One choice of subarrays is [9] with length 1, and [6,5] with
 * length 2.
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: A = [3,8,1,3,2,1,8,9,0], L = 3, M = 2
 * Output: 29
 * Explanation: One choice of subarrays is [3,8,1] with length 3, and [8,9]
 * with length 2.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: A = [2,1,5,6,0,9,5,0,3,8], L = 4, M = 3
 * Output: 31
 * Explanation: One choice of subarrays is [5,6,0,9] with length 4, and [3,8]
 * with length 3.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * L >= 1
 * M >= 1
 * L + M <= A.length <= 1000
 * 0 <= A[i] <= 1000
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
 /**
  * 
  * To those who did not understand the solution-
    you could either have-
    L array appearing first and then M array
    or
    M array appearing first and then L array
    Therefore for a given index i in the loop:
    find maximum sum for L length before index i and add it with every M length sum right to it --------(equation 1)
    find maximum sum for M length before index i and add it with every L length sum right to it---------(equation 2)
    now in every loop do res = max(res , max( equation 1, equation 2))
  */
var maxSumTwoNoOverlap = function(A, L, M) {
    // get Prefix array
    for (let i = 1; i < A.length; i++) {
      A[i] += A[i - 1];
    }
    let res = A[L + M - 1];
    let Lmax = A[L - 1];
    let Mmax = A[M - 1];
    for (let i = L + M; i < A.length; i++) {
      Lmax = Math.max(Lmax, A[i - M] - A[i - L - M]);
      Mmax = Math.max(Mmax, A[i - L] - A[i - L - M]);
      res = Math.max(res, Math.max(Lmax + A[i] - A[i - M]), Mmax + A[i] - A[i - L]);
    }
    return res;
};
// @lc code=end

