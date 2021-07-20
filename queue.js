//Queue class
class Queue {
  constructor() {
    this.data = [];
    this.rear = 0;
    this.size = 10;
  }

  //length
  length() {
    return this.rear;
  }

  //isEmpty
  isEmpty() {
    return this.rear === 0;
  }

  //enqueue
  enqueue(element) {
    if (this.rear < this.size) {
      this.data[this.rear] = element;
      this.rear++;
    }
  }

  //dequeue
  dequeue() {
    if (this.isEmpty() === false) {
      this.rear--;
      return this.data.shift();
    }
  }

  //get Front
  getFront() {
    if (this.isEmpty === false) {
      return this.data[0];
    }
  }

  //get End
  getEnd() {
    if (this.isEmpty === false) {
      return this.data[this.rear - 1];
    }
  }
}
