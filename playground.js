/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let min = Number.MAX_SAFE_INTEGER;
  let i = 0;
  nums = nums.sort();
  let answer;
  for (; i < nums.length - 2; i++) {
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
        let sum = nums[i] + nums[j] + nums[k];
        if (sum === target) {
          return sum;
        }
        if (min > Math.abs(sum - target)) {
            min = Math.abs(sum - target);
            answer = sum;
        }
        if (sum > target) {
            k--; 
        } else {
            j++;
        }
      }
  }
  return answer;
};

threeSumClosest([1,2,4,8,16,32,64,128]);