/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let newHead = null;
  let next = null;
  while (!!head) {
      next = head.next;
      head.next = newHead;
      newHead = head;
      head = next;
  }
  return newHead;
};


var reverseList = function(head) {
  if (head === null) return null;
  if (head.next === null) return head;
  let secondToTail = head.next;
  let remaining = reverseList(head.next);
  secondToTail.next = head;
  head.next = null;

  return remaining;
  
};
