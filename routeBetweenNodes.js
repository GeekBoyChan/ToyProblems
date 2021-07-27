//Given a directed graph and two nodes(S & E), design an algorith to find out wheter there is a route from S to E.

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (this.adjList.has(vertex)) {
      throw 'vertex already exist';
    } else {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(vertex, node) {
    if (this.adjList.has(vertex)) {
      if (this.adjList.has(node)) {
        let arr = this.adjList.get(vertex);
        if (!arr.includes(node)) {
          arr.push(node);
        }
      }
    }
  }

  createVistedObject() {
    let obj = {};
    for (let key of this.adjList.keys()) {
      obj[key] = false;
    }
    return obj;
  }
}

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

routeBetweenNodes(graph, node1, node2){
  let path = [];
  let visted = graph.createVistedObject();
  let q = [];

  visted[node1] = true;
  q.push(node1);
  while(q.length){
    let node = q.pop();
    path.push(node);
    let elements = graph.adjList.get(node);
    if(elements.includes(node2)){
      return true;
    } else {
      for(let elem of elements){
        if(!visted[elem]){
          visited[elem] = true;
          q.unshift(elem);
        }
      }
    }
  }
  return false
}