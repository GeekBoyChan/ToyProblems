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

  //Insert Last Node
  insertLast(data) {
    if (this.head === null || this.size === 0) {
      this.insertFirst(data);
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(data);
    this.size++;
  }

  //insert at index
  insertAtIndex(data, index) {
    if (index > this.size && index > 0) {
      return;
    }
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    let count = 0;
    let newNode = new Node(data);
    let current = this.head;
    let previous = undefined;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    newNode.next = current;
    previous.next = newNode;
    this.size++;
  }

  //get at index
  getIndex(index) {
    if (index > 0 && index > this.size - 1) {
      return;
    }

    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }

    console.log(current.data);
  }

  //remove at index;
  removeAtIndex(index) {
    if (index > 0 && index > this.size - 1) {
      return;
    }

    let current = this.head;
    let count = 0;
    let previous = undefined;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = current.next;
    this.size--;
  }

  //clear list
  clearList() {
    this.head = null;
    this.size = 0;
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
