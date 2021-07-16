//node class
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//linkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert;
}

let detectLoop = (ll) => {
  let slow = ll.head;
  let fast = ll.head;

  while (slow.next && slow.next.next) {
    if (slow.data === fast.data) {
      return slow;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return undefined;
};
