//Stack class
class Stack {
  constructor() {
    this.data = [];
    this.front = 0;
  }

  //isEmpty
  isEmpty() {
    return this.front === 0;
  }

  size() {
    return this.front;
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

  peek() {
    return this.data[this.front - 1];
  }
}

//Set of Stacks Class
class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.stackSet = [];
  }

  getLatestStack() {
    return this.stackSet[this.stackSet.length - 1];
  }

  push(value) {
    let latest = this.getLatestStack();
    if (this.stackSet.length === 0 || latest.size() === this.capacity) {
      let newStack = new Stack();
      newStack.push(value);
      this.stackSet.push(newStack);
    } else {
      latest.push(value);
    }
  }

  pop() {
    if (this.stackSet.length === 0) {
      return undefined;
    }
    let last = this.getLatestStack();
    let value = last.pop();
    if (last.size() === 0) {
      this.stackSet.pop();
    }
    return value;
  }

  peek() {
    let last = this.getLatestStack();
    return last.peek();
  }

  popAt(index) {
    if (index < 0 || index >= this.stackSet.length) {
      return undefined;
    }
    let value = this.stackSet[index].pop();
    if (this.stackSet[index].size() === 0) {
      this.stackSet.splice(index, 1);
    }
    return value;
  }
}
