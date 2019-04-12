var maxSubArrayLen = function (nums, k) {
  let newArray = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    newArray[i + 1] = nums[i] + newArray[i];
  }
  let maxLength = nums.length;
  for (let i = maxLength; i > 0; i--) {
    for (let j = 0; j + i < newArray.length; j++) {
      let start = j;
      let end = j + i;
      if (newArray[end] - newArray[start] === k) {
        return i;
      }
    }
  }
  return 0;
};

maxSubArrayLen([1,1,0], 1);
