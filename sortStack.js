class Stack {
  constructor() {
    this.data = [];
    this.front = 0;
  }

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

  isEmpty() {
    return this.front === 0;
  }
}

let sortStack = (stack) => {
  let tempStack = new Stack();
  let tempVal = undefined;
  let stackDepth = 0;

  while (!stack.isEmpty()) {
    tempVal = stack.pop();
    while (!tempStack.isEmpty() && tempStack.peek() > tempVal) {
      stack.push(tempStack.pop());
    }
    tempStack.push(tempVal);
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  return stack;
};

let stack = new Stack();
stack.push(6);
stack.push(4);
stack.push(8);
stack.push(2);
stack.push(7);

let result = sortStack(stack);
console.log(result);
