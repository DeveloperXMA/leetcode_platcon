/* 
    A partially recursive solution to the iterative algorithm.
 */
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    
    private void swap(ListNode predecessor, ListNode left, ListNode right, ListNode successor) {
        predecessor.next = right;
        right.next = left;
        left.next = successor;
    }
    
    /**
        Section:
            previous (nullable) -> left -> right -> next (nullable)
            
            next = right.next
            previous.next = right;
            right.next = left
            left.next = next;
    */
    
    public ListNode swapPairs(ListNode head) {
        if (head == null) {return head;}
        if (head.next == null) {return head;}
        // swap the first pair
        ListNode predecessor = null;
        ListNode left = head;
        ListNode right = left.next;
        ListNode successor = right.next;

        // swap: predecessor.next = right, right.next = left, left.next =successor
        right.next = left;
        left.next = successor;

        // record the final result
        ListNode result = right;

        // update
        predecessor = left;
        predecessor.next = recur(predecessor.next);
        return result;
    }

    /* 
        A recursive implementation of the iterative algorithm
     */
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