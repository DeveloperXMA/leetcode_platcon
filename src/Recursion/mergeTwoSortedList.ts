import { Node } from './../../utlilty/Types/LinkedListNode';

export const mergeTwoList = (l1: Node<number>, l2:Node<number>): Node<number> => {
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
}