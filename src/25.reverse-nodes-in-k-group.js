/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (39.60%)
 * Likes:    1737
 * Dislikes: 337
 * Total Accepted:    236.7K
 * Total Submissions: 596.6K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and
 * return its modified list.
 * 
 * k is a positive integer and is less than or equal to the length of the
 * linked list. If the number of nodes is not a multiple of k then left-out
 * nodes in the end should remain as it is.
 * 
 * 
 * 
 * 
 * Example:
 * 
 * Given this linked list: 1->2->3->4->5
 * 
 * For k = 2, you should return: 2->1->4->3->5
 * 
 * For k = 3, you should return: 3->2->1->4->5
 * 
 * Note:
 * 
 * 
 * Only constant extra memory is allowed.
 * You may not alter the values in the list's nodes, only nodes itself may be
 * changed.
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
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
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
  if (head === null) return head;
  let tail = head;
    for (var i = 1; i < k; i++) {
      tail = tail.next;
      if (!tail) return head;
    }
  let next = tail.next;
  tail.next = null;
  reverse(head);
  head.next = reverseKGroup(next, k);
  return tail;
};


let reverse = (curr) => {
  let prev = null;
  while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  return prev;
}


// function reverseKGroup(head, k) {
//   if (!head) return null;
//   var tail = head;
//   for (var i = 1; i < k; i++) {
//     tail = tail.next;
//     if (!tail) return head;
//   }
//   var next = tail.next;
//   tail.next = null;
//   reverse(head);
//   head.next = reverseKGroup(next, k);
//   return tail;
// }

// function reverse(curr) {
//   var prev = null;
//   while (curr) {
//     var next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }
//   return prev;
// }
// @lc code=end

