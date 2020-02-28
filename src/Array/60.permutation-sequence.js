/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 *
 * https://leetcode.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Medium (33.90%)
 * Likes:    1172
 * Dislikes: 286
 * Total Accepted:    164.8K
 * Total Submissions: 467.2K
 * Testcase Example:  '3\n3'
 *
 * The set [1,2,3,...,n] contains a total of n! unique permutations.
 * 
 * By listing and labeling all of the permutations in order, we get the
 * following sequence for n = 3:
 * 
 * 
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * 
 * 
 * Given n and k, return the k^th permutation sequence.
 * 
 * Note:
 * 
 * 
 * Given n will be between 1 and 9 inclusive.
 * Given k will be between 1 and n! inclusive.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: n = 3, k = 3
 * Output: "213"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: n = 4, k = 9
 * Output: "2314"
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let results = new Array(n);
    for (let i = 0; i < n; i++) {
      results[i] = i + 1;
    }
    let facts = new Array(n);
    facts[0] = 1;
    for (let i = 1; i <= n; i++) {
      facts[i] = i * facts[i - 1];
    }
    k = k - 1;
    let ans = "";
    for (let i = n ; i > 0; i--) {
      let index = Math.floor(k / facts[i - 1]);
      k = k % facts[i - 1];
      ans += results[index];
      results.splice(index, 1);
    }
    return ans;

};
// @lc code=end

getPermutation(3,3);
