/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        return recur(head);
    }
     private ListNode recur(ListNode head) {
         if (head == null) {return null;}
         if (head.next == null) {return head;}
         // recur, the right-most part of the list will be sorted
         ListNode successor = recur(head.next.next);
         // swap
         ListNode right = head.next;
         right.next = head;
         head.next = successor;
         return right;
    }
}