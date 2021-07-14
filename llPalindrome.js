//implement a function to check if a linked list is a palindrome

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

let palindrome = (ll) => {
  let llArray = [];
  let current = ll.head;
  while (current) {
    llArray.push(current.data);
    current = current.next;
  }

  let llString = llArray.join('');
  let reversellString = llArray.reverse().join('');
  if (llString === reversellString) {
    return true;
  }
  return false;
};

let ll = new LinkedList();
ll.insertAtEnd('h');
ll.insertAtEnd('i');
ll.insertAtEnd('h');
ll.insertAtEnd('p');
ll.insertAtEnd('h');
ll.insertAtEnd('i');
ll.insertAtEnd('h');

let test = palindrome(ll);
console.log(test);
