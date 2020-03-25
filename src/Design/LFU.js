class LFTNode {

  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
    this.freq = 1;
  }

}

class DoubleLinedList {
  constructor () {
    this.head = new LFTNode(null, null);
    this.tail = new LFTNode(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertHead (node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  removeNode(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  removeTail() {
    let node = this.tail.prev;
    this.removeNode(node);
    return node.key;
  }

  isEmpty() {
    return this.head.next.value === null;
  }
}

var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.leastFreq = 0;
  this.nodeHash = new Map();
  this.freqHash = new Map();
}

LFUCache.prototype.get = function (key) {
  let node = this.nodeHash.get(key);
  if (!node) return -1;
  // We first remove this node if it exists
  this.freqHash.get(node.freq).removeNode(node);

  // If we remove the node is in the lease Frequency list and after remove it becomes empty, we increase the leastFreq
  if (node.freq === this.leastFreq && this.freqHash.get(node.freq).isEmpty()) {
    this.leastFreq++;
  }
  node.freq++;

  // If we currently don't have this frequence, we create one;
  if (this.freqHash.get(node.freq) == null) {
    this.freqHash.set(node.freq, new DoubleLinedList());
  }
  this.freqHash.get(node.freq).insertHead(node);
  return node.value;
}

LFUCache.prototype.put = function (key, val) {
  if (this.capacity === 0) return;
  let node = this.nodeHash.get(key);
  if (!node) {
    this.size++;
    if (this.size > this.capacity) {
      let tailKey = this.freqHash.get(this.leastFreq).removeTail();
      this.nodeHash.delete(tailKey);
      this.size--;
    }
    let newNode = new LFTNode(key, val);
    // If we don't have anything, the freqHash 1 should be empty
    if (this.freqHash.get(1) == null) { // Using == here cause it will return undefined
      this.freqHash.set(1, new DoubleLinedList());
    }
    this.freqHash.get(1).insertHead(newNode);

    this.nodeHash.set(key, newNode);
    this.leastFreq = 1;
  } else { // If we have this node
    node.value = val;
    this.freqHash.get(node.freq).removeNode(node);

    if (node.freq === this.leastFreq && this.freqHash.get(node.freq).isEmpty()) {
      this.leastFreq++;
    }
    node.freq++;

    if (this.freqHash.get(node.freq) == null) {
      this.freqHash.set(node.freq, new DoubleLinedList());
    }
    this.freqHash.get(node.freq).insertHead(node);
  }
}