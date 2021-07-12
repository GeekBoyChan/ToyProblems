//Partition.
//Write code to partition a lonked list around a value x such taht all nodes less than x come before all node greater than or equal to x

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
  insertToEnd(data) {
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

let partition = (ll, num) => {
  let leftLL = new LinkedList();
  let rightLL = new LinkedList();

  let current = ll.head;
  while (current) {
    if (current.data < num) {
      leftLL.insertToEnd(current.data);
    } else {
      rightLL.insertToEnd(current.data);
    }
    current = current.next;
  }

  let resultCurrent = leftLL.head;
  while (resultCurrent.next) {
    resultCurrent = resultCurrent.next;
  }
  let rightHead = rightLL.head;
  resultCurrent.next = rightHead;
  leftLL.size += rightLL.size;
  debugger;

  return leftLL;
};

let ll = new LinkedList();
ll.insertToEnd(10);
ll.insertToEnd(8);
ll.insertToEnd(1);
ll.insertToEnd(4);
ll.insertToEnd(5);
ll.insertToEnd(3);
ll.insertToEnd(12);
ll.insertToEnd(5);
ll.insertToEnd(14);

let test = partition(ll, 5);
console.log(test);
