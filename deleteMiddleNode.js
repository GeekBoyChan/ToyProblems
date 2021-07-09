//Implement an algorithm to delete a node in the middle of a
//singly linked list, given only access to that node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null();
    this.size = 0;
  }

  insertToHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
}

let deleteMiddleNode = (node) => {
  if (node && node.next) {
    node.data = node.next.data;
    node.next = node.next.next;
  }
};
