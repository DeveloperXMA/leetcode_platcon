/*
 * @lc app=leetcode id=295 lang=javascript
 *
 * [295] Find Median from Data Stream
 *
 * https://leetcode.com/problems/find-median-from-data-stream/description/
 *
 * algorithms
 * Hard (35.84%)
 * Total Accepted:    101.6K
 * Total Submissions: 283.1K
 * Testcase Example:  '["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]\n[[],[1],[2],[],[3],[]]'
 *
 * Median is the middle value in an ordered integer list. If the size of the
 * list is even, there is no middle value. So the median is the mean of the two
 * middle value.
 * For example,
 * 
 * [2,3,4], the median is 3
 * 
 * [2,3], the median is (2 + 3) / 2 = 2.5
 * 
 * Design a data structure that supports the following two operations:
 * 
 * 
 * void addNum(int num) - Add a integer number from the data stream to the data
 * structure.
 * double findMedian() - Return the median of all elements so far.
 * 
 * 
 * 
 * 
 * Example:
 * 
 * 
 * addNum(1)
 * addNum(2)
 * findMedian() -> 1.5
 * addNum(3) 
 * findMedian() -> 2
 * 
 * 
 * 
 * 
 * Follow up:
 * 
 * 
 * If all integer numbers from the stream are between 0 and 100, how would you
 * optimize it?
 * If 99% of all integer numbers from the stream are between 0 and 100, how
 * would you optimize it?
 * 
 * 
 */
class MedianFinder {
  PriorityQueue<Integer> lower = new PriorityQueue<>(new Comparator<Integer>() {
    @Override
    public int compare(Integer o1, Integer o2) {
      return o1.compareTo(o2) * -1;
    }
  });
  PriorityQueue<Integer> higher = new PriorityQueue<>();

  /** initialize your data structure here. */
  public MedianFinder() {
  }

  public void balance(PriorityQueue<Integer> q1, PriorityQueue<Integer> q2) {
    PriorityQueue<Integer> smaller = q1.size() >= q2.size() ? q2 : q1;
    PriorityQueue<Integer> larger = q1.size() >= q2.size() ? q1 : q2;

    if (larger.size() - smaller.size() >= 2) {
      smaller.add(larger.poll());
    }
  }

  public void addNum(int num) {
    if (lower.size() == 0) {
      lower.add(num);
      return;
    }
    int maxNumber = this.lower.peek();
    if (num >= maxNumber) {
      higher.add(num);
    } else {
      lower.add(num);
    }
    balance(lower, higher);
  }

  public double findMedian() {
    PriorityQueue<Integer> smaller = lower.size() >= higher.size() ? higher : lower;
    PriorityQueue<Integer> larger = lower.size() >= higher.size() ? lower : higher;
    double result;
    if ((smaller.size() + larger.size()) % 2 == 0) {
      result = (double) (smaller.peek() + larger.peek()) / 2.0;
    } else {
      result = larger.peek();
    }
    return result;
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder(); obj.addNum(num); double param_2 =
 * obj.findMedian();
 */