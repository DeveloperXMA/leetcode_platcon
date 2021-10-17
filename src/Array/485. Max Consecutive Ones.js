// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let start = 0, end = 0;
    let max = 0;
    
    for (; end < nums.length; ) {
        if (nums[end] !== 1 || nums[start] !== 1) {
            max = Math.max(end - start, max);
            start = end + 1;
            end++;
        } else {
            end++;
        }
    }
    return Math.max(max, end - start);
};
