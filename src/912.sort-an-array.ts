import { arrayify } from "tslint/lib/utils";

/*
 * @lc app=leetcode id=912 lang=javascript
 *
 * [912] Sort an Array
 *
 * https://leetcode.com/problems/sort-an-array/description/
 *
 * algorithms
 * Medium (62.62%)
 * Likes:    278
 * Dislikes: 197
 * Total Accepted:    53.7K
 * Total Submissions: 85.8K
 * Testcase Example:  '[5,2,3,1]'
 *
 * Given an array of integers nums, sort the array in ascending order.
 * 
 * 
 * Example 1:
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 * Example 2:
 * Input: nums = [5,1,1,2,0,0]
 * Output: [0,0,1,1,2,5]
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 50000
 * -50000 <= nums[i] <= 50000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const bubbleSort = (nums) => {
    if (nums === null) return [];
    if (nums.length < 2) return nums;

    /**
     Bubble Sort
     Optimized Implementation:
     The above function always runs O(n^2) time even if the array is sorted. 
     It can be optimized by stopping the algorithm if inner loop didn’t cause any swap.
     */
    for (let i = nums.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (nums[j] > nums[j + 1]) {
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        }
      }
    }
    return nums;
};

bubbleSort([3,2,4,6])


/**
 * @description Quick Sort, 
 * @description O(Nlog(N)), worst case O(N^2) average O(Nlog(N))
 * @param {number[]} nums 
 */
const quickSort = function (nums) {
  if (nums === null) return [];
  if (nums.length <= 1) {
    return nums;
  }
  // We always choose first element in the array as pivot, or whatever you like
  const [pivot, ...rest] = nums;
  const left = [], right = [];
  rest.forEach(el => {
    el < pivot ?
    left.push(el) : right.push(el)
  })
  return quickSort(left).concat([pivot]).concat(quickSort(right));
}

const quickSort2 = function (nums, left = 0, right = nums.length - 1) {
    let index;

    if (nums.length > 1) {
      index = partition(nums, left, right);
      if (left < index - 1) {
        quickSort2(nums, left, index - 1);
      }
      if (index < right) {
        quickSort2(nums, index, right);
      }
    }

    return nums;
}

const partition = (items, left, right) => {

    let pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

const swap = (items, firstIndex, secondIndex) => {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}


const merge = (left, right) => {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left.concat(right));
}

/**
 * @description O(Nlog(N))
 * @param array 
 */

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([4,3,5,1,6]))


/**
 * Time O(N^2)
 * @param array 
 */
const insertionSort = (array) => {
  if (array.length <= 1) return array;

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let temp = array.splice(i, 1);
        array.splice(j, 0, temp[0]);
      }
    }
  }
  return array;
 }

 console.log('insert sort', insertionSort([6,2,5,7,9]))
// @lc code=end

// quickSort([5,2,3,1])