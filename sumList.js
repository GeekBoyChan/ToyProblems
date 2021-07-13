//You have two numbers represented by a linked list, where each node contains a single digit. the digits are stored in reverse order, such that the 1's digit is at the head of the list;
//Write a function that adds two numbers are returns the sum as a linked list

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

  insertAtHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
}

let sumList = (ll1, ll2) => {
  let val1 = 0;
  let val2 = 0;
  let current1 = ll1.head;
  let current2 = ll2.head;
  let multi = 1;

  while (current1) {
    val1 += current1.data * multi;
    current1 = current1.next;
    multi *= 10;
  }

  multi = 1;

  while (current2) {
    val2 += current2.data * multi;
    current2 = current2.next;
    multi *= 10;
  }

  let total = String(val1 + val2);
  let resultLL = new LinkedList();
  for (let i = total.length - 1; i >= 0; i--) {
    resultLL.insertAtHead(Number(total[i]));
  }

  return resultLL;
};

let ll1 = new LinkedList();
let ll2 = new LinkedList();

ll1.insertAtHead(9);
ll1.insertAtHead(9);

ll2.insertAtHead(9);
ll2.insertAtHead(1);

let newll = sumList(ll1, ll2);

console.log(newll);
