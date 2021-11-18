/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Examples
1 > 2 > 3 > 4 > 5 ---------> 5 > 4 > 3 > 2 > 1
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]


1 > 2 -----------> 2 > 1
Input: head = [1,2]
Output: [2,1]
*/

var reverseList = function (head) {
  let prevNode = null;
  let currentNode = head;
  while (currentNode !== null) {
    let tempNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = tempNode;
  }
  return prevNode;
};
