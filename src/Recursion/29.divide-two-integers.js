/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 *
 * https://leetcode.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (16.14%)
 * Total Accepted:    186.8K
 * Total Submissions: 1.2M
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

/**
 *  32 / 3
 *  1. First iterator
 *   currentSum      currentSum > divident?             Count
 *  3 << 1 = 6,       6  < 32,  continue            1 << 1 = 2
 *  6 << 1 = 12,      12 < 32, continue             2 << 1 = 4
 *  12 << 1 = 24      24 < 32, continue             4 << 1 = 8
 *  24 << 1 = 48,     48 > 32, stop                 8 << 1 = 16
 * 
 * 2.  Get the value in the last continue by right shift 1
 *  48 >> 1 = 24,  16 >> 1 = 8
 * 
 * 3. Reduce dividend by dividend - 24 
 *    32 - 24 = 8,   count = 1
 * 
 * 4. Repeat
 *    3 << 1 = 6,    count = 1 << 1 = 2;
 *    6 << 1 = 12,   count = 2 << 1 = 4;
 *    12 > 8, stop,  count = 4 >> 1 = 2;
 * 
 * 5. I believe you get the idea,
 * 6. The end condition is when divident is smaller than divisor
 */



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
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  if (dividend < divisor) return 0;
  if (dividend === divisor) return sign * 1;

  let currentSum = divisor;
  let count = 1;
  let ans = 0;

  // Using currentSum + currentSum to prevent right shift 1 after while loop ended
  while ((currentSum + currentSum) <= dividend) {
    currentSum += currentSum;
    count += count;
  }

  ans = count + divide(dividend - currentSum, divisor);
  ans *= sign;
  // This is to do some long intergers check
  if (sign === 1) {
    return ans >= 2147483648 ? Math.min(ans, 2147483647) : ans;
  } else {
    return ans <= -2147483648 ? Math.min(ans, -2147483648) : ans;
  }
};

