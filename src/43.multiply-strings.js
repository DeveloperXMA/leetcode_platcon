/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === 0 || num2 === 0) return 0;
  let power = 0;
  let sum = 0;
  for (let i = 0; i < num2.length; i++) {
    sum += helper(num1, num2, Math.pow(10,power++));
  }
  return sum;
};

var helper = function(num1, num2, multiper) {
  // num2 is one digit
  // multiper is 1, 10, 100,...
  let sum = 0;
  let power = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
      let temp = num2 * num1[i];
      sum += temp * (Math.pow(10,power++));
  }
  return sum * multiper;
}
