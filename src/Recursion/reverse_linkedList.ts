import { Node } from './../../utlilty/Types/LinkedList';
// Reverse a singly linked list.

//   Example:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively.Could you implement both ?

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


export const reverseList = (node: Node<number>): Node<number> => {
  if (!node || !node.next) {
    return node;
  }
  let newTail = node.next;
  let newHead = reverseList(node.next);
  newTail.next = node;
  node.next = null;
  return newHead;
}

export const reverseListIteratively = (head: Node<number>): Node<number> => {

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
