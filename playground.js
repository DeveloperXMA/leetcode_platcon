var backTrack = function (result, tempArray, nums, remainder, startIndex) {
  if (remainder < 0) {
    return;
  } else if (remainder === 0) {
    result.push([...tempArray]);
  } else {
    for (let i = startIndex; i < nums.length; i++) {
      tempArray.push(nums[i]);
      backTrack(result, tempArray, nums, remainder - nums[i], i);
      tempArray.pop();
    }
  }

}

var combinationSum = function (candidates, target) {
  candidates.sort();
  let result = [];
  let tempArray = [];
  backTrack(result, tempArray, candidates, target, 0);
  return result;
};
combinationSum([2, 3, 6, 7], 7);