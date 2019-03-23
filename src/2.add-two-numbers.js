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
    if (l1.val === 0 && l1.next === null) return l2;
    if (l2.val === 0 && l2.next === null) return l1;
    let carry = 0;
    let pointer = new ListNode();
    let dummyHead = pointer;
    while (l1 || l2) {
      let value1 = l1 ? l1.val : 0;
      let value2 = l2 ? l2.val : 0;
      let sum = value1 + value2 + carry;
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
      pointer.next = new ListNode( sum % 10 );
      pointer = pointer.next;
      carry = Math.floor( sum / 10);
    }
    if (carry === 1) {
      pointer.next = new ListNode(1);
    }
    return dummyHead.next;
};

