//write code to remove duplicates from an unsorted linked list

//Node class
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//Linked List class
class LinkedList {
  constructor() {
    this.head = null;
  }

  //Insert Fist node;
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  //remove at index
  removeAtIndex(index) {
    let count = 0;
    let current = this.head;
    let previous = undefined;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = current.next;
  }
}

//Remove dups
let removeDups = (linkedList) => {
  let hash = {};
  let node = linkedList.head;
  let index = 0;

  while (node) {
    if (hash[node.data] === undefined) {
      hash[node.data] = true;
      index++;
    } else {
      linkedList.removeAtIndex(index);
      index--;
    }
    node = node.next;
  }

  return linkedList;
};

let ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
ll.insertFirst(200);
ll.insertFirst(100);
ll.insertFirst(100);
ll.insertFirst(400);

removeDups(ll);
