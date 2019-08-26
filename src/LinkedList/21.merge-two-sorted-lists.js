/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
      return l2;
    }
    if (l2 === null) {
      return l1;
    }
    if (l1.val <= l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else if (l1.val > l2.val) {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Your runtime beats 99.8 % of javascript submissions
 * Your memory usage beats 45.12 % of javascript submissions (35.5 MB)
 */
var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(null);
  let prev = dummy;
  while (l1 || l2) {
    if (l1 === null) {
      prev.next = l2;
      return dummy.next;
    }
    if (l2 === null) {
      prev.next = l1;
      return dummy.next;
    }
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  return dummy.next;
}

