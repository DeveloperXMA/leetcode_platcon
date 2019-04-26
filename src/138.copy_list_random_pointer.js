var copyRandomList = function(head) {
  if (head === null) return null;
  let hashTable = new Map();
  let curr = head;
  while (curr !== null) {
    hashTable.set(curr, new Node(curr.val, null, null));
    curr = curr.next;
  }
  curr = head;
  while (curr !== null) {
    hashTable.get(curr).next = hashTable.get(curr.next) ? hashTable.get(curr.next) : null;
    hashTable.get(curr).random = hashTable.get(curr.random) ? hashTable.get(curr.random) : null;
    curr = curr.next;
  }
  return hashTable.get(head);
};