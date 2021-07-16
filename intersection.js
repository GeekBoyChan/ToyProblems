//node class
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//linked list class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtEnd(data) {
    if (this.size === 0) {
      this.head = new Node(data, this.head);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data);
    }
    this.size++;
  }
}

let intersection = (ll1, ll2) => {
  let stack1 = [];
  let stack2 = [];

  let current1 = ll1.head;
  let current2 = ll2.head;

  while (current1) {
    stack1.push(current1);
    current1 = current1.next;
  }

  while (current2) {
    stack2.push(current2);
    current2 = current2.next;
  }

  let node1 = stack1;

  if (stack1.length === 0 || stack2.length === 0) {
    return undefined;
  } else if (
    stack1[stack1.length - 1].data !== stack2[stack2.length - 1].data
  ) {
    return undefined;
  } else {
    let currentNode = undefined;
    while (stack1[stack1.length - 1].data === stack2[stack2.length - 1].data) {
      currentNode = stack1[stack1.length - 1];
      stack1.pop();
      stack2.pop();
    }
    return currentNode;
  }
};
