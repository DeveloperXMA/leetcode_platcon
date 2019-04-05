
let results = [];
let tempArray = [];

var backTrack = function (results, tempArray, nums) {
  console.log("results ", results);
  if (tempArray.length === nums.length) {
    results.push(tempArray);
    return results;
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (tempArray.includes(nums[i])) {
        continue;
      }
      tempArray.push(nums[i]);
      backTrack(results, tempArray, nums);
      tempArray.pop();
    }
  }
}

var permute = function (nums) {
  backTrack(results, tempArray, nums);
  return results;
};

permute([1]);