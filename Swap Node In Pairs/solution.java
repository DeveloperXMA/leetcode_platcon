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
        while (predecessor.next != null && predecessor.next.next != null) {
            /*
                predecessor -> left -> right -> successor
                                        predecessor -> left -> right -> successor
            */
            left = predecessor.next;
            right = left.next;
            successor = right.next;
            // swap
            predecessor.next = right;
            right.next = left;
            left.next = successor;
            // update
            predecessor = left;
        }
        return result;
    }
}