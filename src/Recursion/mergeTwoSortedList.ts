import { Node } from "./../../utlilty/Types/LinkedListNode";

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

export const mergeTwoList = (
  l1: Node<number>,
  l2: Node<number>
): Node<number> => {
  if (l1 === null && l2 === null) {
    return null;
  } else if (l1 === null && l2 !== null) {
    return l2;
  } else if (l1 !== null && l2 === null) {
    return l1;
  } else if (l1.value <= l2.value) {
    l1.next = mergeTwoList(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoList(l1, l2.next);
    return l2;
  }
};

export const mergeTwoList2 = (
  l1: Node<number>,
  l2: Node<number>
): Node<number> => {
  if (l1 === null && l2 === null) return null;
  if (l1 === null && l2 !== null) {
    return l2;
  }
  if (l1 !== null && l2 === null) {
    return l1;
  }
  let point1 = l1;
  let point2 = l2;
  let result = {
    value: null,
    next: null
  };
  let newHead = result;

  while (point1 !== null && point2 !== null) {
    if (point1.value <= point2.value) {
      result.next = point1;
      point1 = point1.next;
    } else {
      result.next = point2;
      point2 = point2.next;
    }
    result = result.next;
  }

  if (point1 === null) {
    result.next = point2;
  } else {
    result.next = point1;
  }

  return newHead.next;
};
