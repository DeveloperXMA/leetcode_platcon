/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 *
 * https://leetcode.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (16.19%)
 * Likes:    936
 * Dislikes: 4578
 * Total Accepted:    247K
 * Total Submissions: 1.5M
 * Testcase Example:  '10\n3'
 *
 * Given two integers dividend and divisor, divide two integers without using
 * multiplication, division and mod operator.
 * 
 * Return the quotient after dividing dividend by divisor.
 * 
 * The integer division should truncate toward zero.
 * 
 * Example 1:
 * 
 * 
 * Input: dividend = 10, divisor = 3
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: dividend = 7, divisor = -3
 * Output: -2
 * 
 * Note:
 * 
 * 
 * Both dividend and divisor will be 32-bit signed integers.
 * The divisor will never be 0.
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 2^31 − 1 when the
 * division result overflows.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
  if (dividend === 0) return 0;
  let sign = 1;
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
      sign = -1;
  }
  if (dividend === divisor) return 1;
  
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  
  if (dividend < divisor) return 0;
  
  let count = 1;
  let sum = divisor;
  let answer = 0;
  while (sum + sum <= dividend) {
      sum += sum;
      count += count;
  }
  answer = count + divide(dividend - sum, divisor);
  answer *= sign;
  if (answer > 0 && answer > Math.pow(2,31) -1) {
      return Math.pow(2,31) - 1;
  }
  return answer;
};
// @lc code=end

