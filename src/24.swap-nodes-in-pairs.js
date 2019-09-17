/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
 * @description Recursion solution
 */

// var swapPairs = function(head) {
//     if (head === null || head.next === null) {
//       return head;
//     }
//     let dummy = head.next;
//     head.next = swapPairs(head.next.next);
//     dummy.next = head;
//     return dummy;
// };

/**
 * 
 * @param {ListNode} head 
 * @returns {ListNode}
 * @description Iterative solution
 */
var swapPairs = function(head) {
  // 一般这样的Iterative方法都需要一个While循环
  // 而且你肯定需要记录原来的Head的位置，这样我们就会需要一个dummy节点
  // 这道题不难，就是比较绕，一般这种题目都需要一个dummy节点，一个pointer节点

  if (head === null || head.next === null) return head;

  // 这里我们就确保了接下来的列表一定起码有两个nodes
  let dummyHead = new ListNode(null);
  dummyHead.next = head;
  let p1 = dummyHead;

  //       h
  // p1 -> 1 -> 2 -> 3 -> 4
  // dummy

  while (head && head.next) { 
    //       h         n
    // p1 -> 1 -> 2 -> 3 -> 4
    let newStart = head.next.next;

    // d  -> 2 -> 3 -> 4
    // p1 -> 2 -> 3 -> 4
    // 1  -> 2 -> 3 -> 4
    p1.next = head.next;
     
    // h  
    // 1 <- 2  n
    // 1 -> 2  3 -> 4
    head.next.next = head;
    
    //                 n
    // p1 -> 2 -> 1 -> 3 -> 4
    head.next = newStart;
    //      p    n
    // 2 -> 1 -> 3 -> 4
    p1 = head;
    
    //      p    h
    // 2 -> 1 -> 3 -> 4
    head = newStart;

    // 第一遍循环完的结果是这样子滴
    // dummy -> 2 -> 1 -> 3 -> 4
    //               p1   head
    // 注意p1 和 head 的位置恢复到了初始状态。
  }

  return dummyHead.next;
}
