/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 *
 * https://leetcode.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (48.56%)
 * Likes:    1688
 * Dislikes: 366
 * Total Accepted:    389K
 * Total Submissions: 782.8K
 * Testcase Example:  '19'
 *
 * Write an algorithm to determine if a number is "happy".
 * 
 * A happy number is a number defined by the following process: Starting with
 * any positive integer, replace the number by the sum of the squares of its
 * digits, and repeat the process until the number equals 1 (where it will
 * stay), or it loops endlessly in a cycle which does not include 1. Those
 * numbers for which this process ends in 1 are happy numbers.
 * 
 * Example: 
 * 
 * 
 * Input: 19
 * Output: true
 * Explanation: 
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  let set = new Set();
  let digits = getDigits(n);
  while (true) {     
      let sum = 0;
      for (let digit of digits) {
          sum += digit * digit;
      }
      
      if (sum === 1) return true;
      
      if (set.has(sum)) {
          return false;
      } else {
          set.add(sum);
          digits = getDigits(sum);
      }
  }
};

const getDigits = (number) => {
  let res = [];
  while (number > 0) {
      res.unshift(Math.floor(number % 10));
      number = Math.floor(number / 10);
  }
  return res;
}
// @lc code=end

