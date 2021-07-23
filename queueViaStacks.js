//Stack class
class Stack {
  constructor() {
    this.front = 0;
    this.data = [];
  }

  //push
  push(element) {
    this.data[this.front] = element;
    this.front++;
  }

  pop() {
    this.front--;
    return this.data.pop();
  }

  isEmpty() {
    return this.front === 0;
  }

  peek() {
    return this.data[this.front - 1];
  }
}

//myQueue class
class MyQueue {
  constructor() {
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
  }

  enqueue(element) {
    this.enqueueStack.push(element);
  }

  dequeue() {
    if (this.enqueueStack.isEmpty() && this.dequeueStack.isEmpty()) {
      return undefined;
    }
    if (this.dequeueStack.isEmpty()) {
      while (!this.enqueueStack.isEmpty()) {
        this.dequeueStack.push(this.enqueueStack.pop());
      }
    }
    return this.dequeueStack.pop();
  }
}
