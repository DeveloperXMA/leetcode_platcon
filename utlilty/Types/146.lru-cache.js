/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 *
 * https://leetcode.com/problems/lru-cache/description/
 *
 * algorithms
 * Hard (24.82%)
 * Total Accepted:    282K
 * Total Submissions: 1.1M
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 
 * Design and implement a data structure for Least Recently Used (LRU) cache.
 * It should support the following operations: get and put.
 * 
 * 
 * 
 * get(key) - Get the value (will always be positive) of the key if the key
 * exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present.
 * When the cache reached its capacity, it should invalidate the least recently
 * used item before inserting a new item.
 * 
 * 
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 * 
 * Example:
 * 
 * LRUCache cache = new LRUCache( 2 /* capacity */

var Node = function (key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.limit = capacity;
  this.head = null;
  this.tail = null;
  this.size = 0;
  this.cache = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (keyFromPara) {
  if (!this.cache[keyFromPara]) return -1;
  let node = this.cache[keyFromPara];
  const { key, value } = node;
  this.remove(key);
  this.addToHead(new Node(key, value));
  return value;
};

LRUCache.prototype.remove = function (key) {
  let node = this.cache[key];
  const { prev, next } = node;
  if (prev && next) {
    prev.next = node.next;
    next.prev = node.prev;
  } else if (prev) {
    prev.next = null;
    this.tail = prev;
  } else if (next) {
    next.prev = null;
    this.head = next;
  } else {
    this.head = null;
    this.tail = null;
  }
  delete this.cache[key];
  this.size--;
}

LRUCache.prototype.addToHead = function (node) {
  node.next = this.head;
  const { key } = node;
  let currentHead = this.head;
  if (currentHead) {
    currentHead.prev = node;
  }
  this.head = node;
  if (!this.tail) {
    this.tail = node;
  }
  this.cache[key] = node;
  this.size++;
}

LRUCache.prototype.removeFromTail = function () {
  let tail = this.tail;
  const { key, prev } = tail;
  if (prev === null) {
    this.head = null;
    this.tail = null;
  } else {
    prev.next = null;
    this.tail = prev;
  }
  delete this.cache[key];
  this.size--;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    this.remove(key);
    this.addToHead(new Node(key, value));
  } else {
    if (this.size >= this.limit) {
      this.removeFromTail();
    }
    this.addToHead(new Node(key, value));
  }
};
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

