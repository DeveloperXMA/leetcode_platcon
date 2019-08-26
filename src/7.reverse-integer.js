/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = 0;
  let flag = x < 0 ? -1 : 1;
  x = Math.abs(x);
  while (x !== 0) {
    res = res * 10 + x % 10;
    x = Math.floor( x / 10);
  }
  res = res * flag;
  if ((res > Math.pow(2, 31) + 1) || res < Math.pow(-2, 31)) {
    return 0;
  } 
  return res;
};

reverse(-123);

