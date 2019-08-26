import java.util.Comparator;
import java.util.PriorityQueue;

/*
 * @lc app=leetcode id=215 lang=java
 *
 * [215] Kth Largest Element in an Array
 */
class Solution {
    static class maxHeapComparator implements Comparator<Integer> {
        @Override
        public int compare (Integer x, Integer y) {
            return x-y; //reverse order
        }
    }

    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> heap = new PriorityQueue<>(new maxHeapComparator());
        
        for (int number : nums) {
            heap.add(number);
            if (heap.size() > k) {
                heap.poll();
            }
        }
        return heap.peek();
    }
}

