var backTrack = function (results, tempArray, nums, used) {
  if (tempArray.length === nums.length) {
    results.push([...tempArray]);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (used[i] || (i > 0 && nums[i - 1] === nums[i] && !nums[i - 1])) continue;
      used[i] = true;
      tempArray.push(nums[i]);
      backTrack(results, tempArray, nums, used);
      used[i] = false
      tempArray.pop();
    }
  }
}


var permuteUnique = function (nums) {
  let results = [];
  let tempArray = [];
  let used = new Array(nums.length).fill(false);
  nums.sort();
  backTrack(results, tempArray, nums, used);
  return results;
};

permuteUnique([1,1]);