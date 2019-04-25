/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */
/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * 输入字符串的第一个字符串是重复子字符串的第一个字符
 * 输入字符串的最后一个字符串是重复子字符串的最后一个字符
 * 令S1 = S + S（其中输入字符串中的S）
 * 删除S1的第一个和最后一个字符，生成字符串S2。
 * 如果S存在于S2中，则返回true否则为false。
 * 这个思想的精髓就在于通过拷贝一次字符串，并且各自破坏一小部分，
 * 然后通过两个串的拼接完成原串的查找。如果串不满足要求的特性，是拼装不出来的。
 */
// var repeatedSubstringPattern = function(s) {
//   let newStr = (s + s).slice(1,-1);
//   return newStr.indexOf(s) >= 0;
// };

/**
 * 
 *  先提取字符串的一半，然后乘以2，看生成串和原串是否相同，相同则true，
 *  否则提取字符串三分之一，然后乘以3，以此类推 s 
 */
var repeatedSubstringPattern = function(s) {
  let halfLength = Math.floor(s.length / 2);
  for (let i = halfLength; i > 0; i--) {
    let component = s.slice(0, i);
    let count = s.length / i;
    let newStr = "";
    while (count > 0) {
      newStr += component;
      count--;
    }
    if (newStr === s) {
      return true;
    }
  }
  return false;
}
