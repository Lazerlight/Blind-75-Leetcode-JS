/* Given the head of a singly linked list, reverse the list, and return the reversed list. */

// My Solution

var reverseList = function(head) {
    let prev = null, next
        while (head != null) {
            next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
};
