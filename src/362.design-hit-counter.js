/**
 * Initialize your data structure here.
 */
var HitCounter = function () {
  this.times = new Array(300);
  this.hits = new Array(300);
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  let index = timestamp % 300;
  if (this.times[index] !== timestamp) {
    this.times[index] = timestamp;
    this.hits[index] = 1;
  } else {
    this.hits[index]++;
  }
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
  let index = timestamp % 300;
  let count = 0;
  for (let i = 0; i < 300; i++) {
    if (timestamp - this.times[i] < 300) {
      count += this.hits[i];
    }
  }
  return count;
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */