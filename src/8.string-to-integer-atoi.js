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
  let index = 0;

  if (!isDigit.test(str[0])) return 0;
  while (isDigit.test(str.charAt(index))) {
    index++;
  }
  let result = str.sslice(0, index) === '-' || '+' ? 0 : parseInt(str.slice(0, index));
  if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (result < Math.pow(2, 31) * -1) {
    return Math.pow(2, 31) * -1;
  }
  return result;
};

myAtoi("42");
