//Implement an algorithm to find the kth to last element of a singly linked list
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

  //insert to head
  insertToHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
    return;
  }
}

let kthToLast = (ll, num) => {
  if (num > ll.size || num <= 0) {
    return console.log('Kth num from the last element is out of bounds');
  }

  let target = ll.size - num;
  let count = 0;
  let current = ll.head;

  while (count < target) {
    current = current.next;
    count++;
  }

  return current;
};

let ll = new LinkedList();

ll.insertToHead(100);
ll.insertToHead(200);
ll.insertToHead(300);
ll.insertToHead(400);
ll.insertToHead(500);
ll.insertToHead(600);

kthToLast(ll, 4);
