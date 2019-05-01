/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let v of s) {
      switch (v) {
        case ')':
          if (stack.pop() !== '(') {
            return false;
          }
          break;
        case ']':
          if (stack.pop() !== '[') {
            return false;
          }
          break;
        case '}': 
          if (stack.pop() !== '{') {
            return false;
          }
          break;
        default:
          stack.push(v);
      }
    }
    return stack.length === 0;
};