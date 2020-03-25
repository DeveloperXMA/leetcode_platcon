/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
 *
 * https://leetcode.com/problems/add-two-numbers-ii/description/
 *
 * algorithms
 * Medium (51.70%)
 * Likes:    1126
 * Dislikes: 139
 * Total Accepted:    134.2K
 * Total Submissions: 253.5K
 * Testcase Example:  '[7,2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The most significant digit comes first and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Follow up:
 * What if you cannot modify the input lists? In other words, reversing the
 * lists is not allowed.
 * 
 * 
 * 
 * Example:
 * 
 * Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 8 -> 0 -> 7
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let stack1 = [];
  let stack2 = [];
  let stack3 = [];

  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }



  let add1 = 0, add2 = 0, carry = 0;
  let tempSum = 0;
  while (stack1.length || stack2.length) {
    add1 = stack1.length > 0 ? stack1.pop() : 0;
    add2 = stack2.length > 0 ? stack2.pop() : 0;
    tempSum = add1 + add2 + carry;

    carry = 0;

    if (tempSum >= 10) {
      carry = 1;
      tempSum = tempSum % 10;
    }
    stack3.push(tempSum);
  }

  if (carry === 1) {
    stack3.push(1);
  }

  let dummy = new ListNode(null);
  let curr = dummy;

  while (stack3.length) {
    curr.next = new ListNode(stack3.pop());
    curr = curr.next;
  }
  return dummy.next;
};
// @lc code=end

