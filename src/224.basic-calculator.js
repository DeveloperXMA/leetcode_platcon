/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 *
 * https://leetcode.com/problems/basic-calculator/description/
 *
 * algorithms
 * Hard (35.44%)
 * Likes:    1206
 * Dislikes: 117
 * Total Accepted:    145.2K
 * Total Submissions: 407.4K
 * Testcase Example:  '"1 + 1"'
 *
 * Implement a basic calculator to evaluate a simple expression string.
 * 
 * The expression string may contain open ( and closing parentheses ), the plus
 * + or minus sign -, non-negative integers and empty spaces  .
 * 
 * Example 1:
 * 
 * 
 * Input: "1 + 1"
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: " 2-1 + 2 "
 * Output: 3
 * 
 * Example 3:
 * 
 * 
 * Input: "(1+(4+5+2)-3)+(6+8)"
 * Output: 23
 * Note:
 * 
 * 
 * You may assume that the given expression is always valid.
 * Do not use the eval built-in library function.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var evaluate = function (stack) {
  let res = 0;
  
  if (stack.length > 0) {
      res = parseInt(stack.pop());
  }
  
  while (stack.length > 0 && stack[stack.length - 1] !== ')') {
      let sign = stack.pop();
      
      if (sign === '+') {
          res += parseInt(stack.pop());
      } else {
          res -= parseInt(stack.pop());
      }
  }
  return res;
}

var calculate = function(s) {
  let operand = 0;
  let n = 0;
  let stack = [];
  s = s.replace(/\s/g, '');

  for (let i = s.length - 1; i >= 0; i--) {
      let ch = s[i];
      if (Number.isInteger(parseInt(ch))) {
          operand = Math.pow(10, n) * parseInt(ch) + operand;
          n++;
      } else {
          if (n !== 0) {
              stack.push(operand);
              n = 0;
              operand = 0;
          }
          if (ch === '(') {
              let res = evaluate(stack);
              stack.pop();
              stack.push(res);
          } else {
              stack.push(ch);
          }
      }
  }
  
  if (n !== 0) {
      stack.push(operand);
  }
  
  return evaluate(stack);
};

calculate("1+1");
// @lc code=end

