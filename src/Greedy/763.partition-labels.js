/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 *
 * https://leetcode.com/problems/partition-labels/description/
 *
 * algorithms
 * Medium (69.08%)
 * Total Accepted:    40.4K
 * Total Submissions: 58.3K
 * Testcase Example:  '"ababcbacadefegdehijhklij"'
 *
 * 
 * A string S of lowercase letters is given.  We want to partition this string
 * into as many parts as possible so that each letter appears in at most one
 * part, and return a list of integers representing the size of these parts.
 * 
 * 
 * Example 1:
 * 
 * Input: S = "ababcbacadefegdehijhklij"
 * Output: [9,7,8]
 * Explanation:
 * The partition is "ababcbaca", "defegde", "hijhklij".
 * This is a partition so that each letter appears in at most one part.
 * A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it
 * splits S into less parts.
 * 
 * 
 * 
 * Note:
 * S will have length in range [1, 500].
 * S will consist of lowercase letters ('a' to 'z') only.
 * 
 */
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    /**
     * Idea is to use an array of last index of letter in String s
     * for example, ababcbaca can be an array of [8, 5, 7]
     * means letter a's last index in S is 8
     * letter b's last index in S is 5
     * letter c's last index in S is 7
     * 
     * Then we set two pointers, i and j, i = the first letter in string, j = the last index of S[i]
     * Because we want as many as possible, we use greedy algorithm, the best case is:
     * all letter between i and j, the letters' last index didn't exceed j,
     * we loop from i to j, if S[i]'s last index exceed j, we update j to S[i]'s last index
     * end condition is i === j
     */

     let lastIndexArray = new Array(26).fill(0);
     // get the last index of letter, put them in the 26 character's array
     // letter a's lst index will be in lastIndexArray[0]
     let result = [];
     for (let i = 0; i < S.length; i++) {
       lastIndexArray[S.charAt(i).charCodeAt(0) - 97] = i;
     }
     for (let i = 0; i < S.length;) {
       let j = lastIndexArray[S.charAt(i).charCodeAt(0) - 97];
       for (let index = i; index < j; index++) {
         let currentIndex =
           lastIndexArray[S.charAt(index).charCodeAt(0) - 97];
         if ( currentIndex > j) {
           j = currentIndex;
         }
       }
       result.push(j - i + 1);
       i = j + 1;
     }
     return result;
};

