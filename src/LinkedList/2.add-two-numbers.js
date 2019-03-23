/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
  let carry = 0;
  let head = new ListNode(null);
  let curr = head;
  while (l1 || l2) {
    let addOn1 = l1 ? l1.val : 0;
    let addOn2 = l2 ? l2.val : 0;
    let sum = addOn1 + addOn2 + carry;
    let reminder = sum % 10;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(reminder);
    curr = curr.next;
    l1 ? l1 = l1.next : null;
    l2 ? l2 = l2.next : null;
  }
  if (carry === 1) {
      curr.next = new ListNode(1);        
  }
  return head.next;
};

