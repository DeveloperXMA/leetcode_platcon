/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.79%)
 * Total Accepted:    806.9K
 * Total Submissions: 2.6M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 * 
 */
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
var addTwoNumbers = function(l1, l2) {
    let curr = new ListNode();
    let dummy = curr;
    let carry = 0;
    while (l1 || l2) {
      let add1 = l1 ? l1.val : 0;
      let add2 = l2 ? l2.val : 0;
      let result = add1 + add2 + carry;
      let reminder = result % 10;
      carry = Math.floor(result / 10);
      curr.next = new ListNode(reminder);
      curr = curr.next;
      if (l1) {
        l1 = l1.next;
      }
      if (l2) {
        l2 = l2.next;
      }
    }
    if (carry === 1) {
      curr.next = new ListNode(1);
    }
    return dummy.next;
};

