import java.util.Comparator;
import java.util.PriorityQueue;

class Solution {
    
    static final Comparator<int[]> myComparator = new Comparator<int[]>(){
      @Override
      public int compare(int[] o1, int[] o2) {
          return o1[0] - o2[0];
      }
    };
    public int minMeetingRooms(int[][] intervals) {
        Arrays.sort(intervals, myComparator);
        PriorityQueue<Integer> heap = new PriorityQueue<Integer>((a,b) -> a - b);
        for (int[] meet : intervals) {
            if (heap.size() == 0) {
                heap.add(meet[1]);
            } else {
                if (heap.peek() <= meet[0]) {
                    heap.poll();
                    heap.add(meet[1]);
                } else {
                    heap.add(meet[1]);
                }
            }
        }
        return heap.size();
    }
}