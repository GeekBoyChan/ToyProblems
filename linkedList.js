class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert Fist node;
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  //Print List Data
  listData() {
    if (this.head === null || this.size === 0) {
      return;
    }
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
