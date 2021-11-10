/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Input: head = [], val = 1
Output: []

Input: head = [7,7,7,7], val = 7
Output: []
*/

var removeElements = function (head, val) {
  let anchor = new ListNode(0, head);
  let prevNode = anchor;
  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.val === val) {
      prevNode.next = currentNode.next;
    } else {
      prevNode = currentNode;
    }
    currentNode = currentNode.next;
  }

  return anchor.next;
};
