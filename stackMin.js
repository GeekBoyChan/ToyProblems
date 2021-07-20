//How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop, and min should all opweare in O(1) time.

//stack class
class Stack {
  constructor() {
    this.data = [];
    this.front = 0;
    this.min = null;
    this.minStack = [];
  }

  isEmpty() {
    return this.front === 0;
  }

  push(element) {
    this.data[this.front] = element;
    this.front++;

    if (this.isEmpty() === true || element <= this.min) {
      this.minStack.push(element);
      this.min = element;
    }
  }

  pop() {
    let popped = this.data.pop();
    if (popped === this.min) {
      this.minStack.pop();
      this.min = this.minStack[this.minStack.length - 1];
    }
  }

  min() {
    return this.min;
  }
}
