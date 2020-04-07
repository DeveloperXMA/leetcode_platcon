/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 *
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (50.30%)
 * Likes:    1115
 * Dislikes: 362
 * Total Accepted:    305K
 * Total Submissions: 603.8K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * Given two arrays, write a function to compute their intersection.
 * 
 * Example 1:
 * 
 * 
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9]
 * 
 * 
 * Note:
 * 
 * 
 * Each element in the result should appear as many times as it shows in both
 * arrays.
 * The result can be in any order.
 * 
 * 
 * Follow up:
 * 
 * 
 * What if the given array is already sorted? How would you optimize your
 * algorithm?
 * What if nums1's size is small compared to nums2's size? Which algorithm is
 * better?
 * What if elements of nums2 are stored on disk, and the memory is limited such
 * that you cannot load all elements into the memory at once?
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 [0, 34, 38, 4, 44, 45, 5, 57, 6, 61, 7, 77, 79, 85, 88, 89, 92]
 [0, 34, 38, 44, 45, 57, 61, 77, 79, 85, 88, 89, 92]
var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => (a - b));
  nums2.sort((a, b) => (a - b));
  
  let res = [];
  for (let i = 0, j = 0; i < nums1.length && j < nums2.length;) {
    if (nums1[i] < nums2[j]) {
        i++;
    } else if (nums1[i] > nums2[j]) {
        j++;
    } else {
        res.push(nums1[i]);
        i++;
        j++;
    }
  }
  return res;
};
// @lc code=end

const nums1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81];
const nums2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48];
console.log(intersect(nums1, nums2))