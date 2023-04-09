/* Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node. */

// My Solution

var middleNode = function (head) {
  let length = getLength(head);
  if (length % 2 != 0) length--;
  for (let i = 0; i < length / 2; i++) {
    head = head.next;
  }
  return head;
};

var getLength = function (head) {
  let length = 0;
  while (head != null) {
    head = head.next;
    length++;
  }
  return length;
};
