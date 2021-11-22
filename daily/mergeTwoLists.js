/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Examples
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: l1 = [], l2 = [0]
Output: [0]
*/

var mergeTwoLists = function (l1, l2) {
  let anchor = new ListNode();
  let mergedList = anchor;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      mergedList.next = l1;
      l1 = l1.next;
    } else if (l1.val > l2.val) {
      mergedList.next = l2;
      l2 = l2.next;
    }

    mergedList = mergedList.next;
  }

  if (l1 === null) {
    mergedList.next = l2;
  } else {
    mergedList.next = l1;
  }

  return anchor.next;
};
