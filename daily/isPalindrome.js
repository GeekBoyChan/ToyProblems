/*
Given the head of a singly linked list, return true if it is a palindrome.

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false
*/

var isPalindrome = function (head) {
  let stringArr = [];
  currentNode = head;

  while (currentNode) {
    stringArr.push(currentNode.val);
    currentNode = currentNode.next;
  }

  let front = 0;
  let back = stringArr.length - 1;
  while (front < back) {
    if (stringArr[front] !== stringArr[back]) {
      return false;
    }
    front++;
    back--;
  }

  return true;
};
