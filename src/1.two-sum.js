/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let table = {};
    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (table[diff] !== undefined) {
        return [table[diff], i];
      }
      table[nums[i]] = i;
    }
    return [];
};


let template = '你好，我们公司是{{ company }}，我们属于{{group.name}}业务线，我们在招聘各种方向的人才，包括{{group.jobs[0]}}、{{group["jobs"][1]}}等。';
let obj = {
  group: {
    name: '天猫',
    jobs: ['前端']
  },
  company: '阿里'
}
var render = function (template, obj) {
  template = template.replace(/{{/g, '{').replace(/}}/g, '}').replace(/\["/g, '.').replace(/"]/g, '');
  let start = 0, end = 0;
  for (; start < template.length, end < template.length; ) {
    if (template[start] !== '{') {
      start++;
      end++;
    } else if (template[start] === '{') {
      while (template[end] !== '}') {
        end++;
      }
      let currentString = template.slice(start + 1, end).trim();
      // 三种cases, object, array, string
      // 如果直接是一个String
      if (obj[currentString]) {
        template = template.substring(0, start) + obj[currentString] + template.substring(end + 1, template.length)
      }
      // 如果是一个object

      console.log(template, currentString);
      start = end ;
      end = end + 1;
    }
  }
}
 
render(template, obj);