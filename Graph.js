class Graph {
  constructor() {
    this.adjList = new Map();
  }

  //Add Vertex
  addVertex(vertex) {
    if (this.adjList.has(vertex)) {
      throw 'Already Exist';
    } else {
      this.adjList.set(vertex, []);
    }
  }

  //Add Edge
  addEdge(vertex, node) {
    //check if vertex exist within the graph
    if (this.adjList.has(vertex)) {
      //check if node vertex wants to point to is within the graph
      if (this.adjList.has(node)) {
        let arr = this.adjList.get(vertex);
        //check if vertex has an edge pointing to node
        if (!arr.includes(node)) {
          arr.push(node);
        }
      } else {
        throw `Can't add non-existing vertex: '${node}'`;
      }
    } else {
      throw `'${vertex}' does not exist within this graph`;
    }
  }

  print() {
    for (let [key, value] of this.adjList) {
      console.log(key, value);
    }
  }
}

let g = new Graph();
let arr = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < arr.length; i++) {
  g.addVertex(arr[i]);
}
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
g.print();
