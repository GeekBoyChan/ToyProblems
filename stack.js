//Stack Class

class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  //length
  length() {
    return this.top;
  }

  //peek
  peek() {
    return this.data[this.top - 1];
  }

  //push
  push(element) {
    this.data[this.top] = element;
    this.top++;
  }

  //pop
  pop() {
    this.top--;
    return this.data.pop();
  }

  //isEmpty
  isEmpty() {
    return this.top === 0;
  }
}
