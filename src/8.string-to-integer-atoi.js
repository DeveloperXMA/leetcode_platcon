/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const isDigit = /[-+0-9]/;
  str = str.trim();
  let result = 0;
  let startIndex = 0;
  let sign = 1;
  if (str[0] === '-') {
    sign = -1;
    startIndex = 1;
  }
  if (str[0] === '+') {
    sign = 1;
    startIndex = 1;
  }
  let IgotNumber = false;
  for (let i = startIndex; i < str.length; i++) {
    let temp = str[i];
    if ((temp === '+' || temp === '-') && !IgotNumber) return 0;
    if ((temp === '+' || temp === '-') && IgotNumber) break;
    if (!isDigit.test(temp)) {
      break;
    } else {
      result = result * 10;
      result += +temp;
      IgotNumber = true;
    }
  }
  result *= sign;
  if (result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  if (result < Math.pow(-2, 31)) return Math.pow(-2, 31);
  return result;
};

myAtoi("42");
