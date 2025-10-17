// directional adjacency list
const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

console.log("Adjacency List:", adjacencyList["B"]);

// undirectional adjacency list
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      console.log("Not found to remove vertex");
    } else {
      for (let adjacentVertex of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }

  addEdge(vertex1, vertext2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertext2]) {
      this.addVertex(vertext2);
    }
    this.adjacencyList[vertex1].add(vertext2);
    this.adjacencyList[vertext2].add(vertex1);
  }

  hasEdge(vertex1, vertex2) {
    return !!(
      this.adjacencyList?.[vertex1]?.has(vertex2) &&
      this.adjacencyList?.[vertex2]?.has(vertex1)
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList?.[vertex1]?.delete(vertex2);
    this.adjacencyList?.[vertex2]?.delete(vertex1);
  }

  print() {
    // for (let vertex in this.adjacencyList) {
    //   console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`);
    // }
    console.log(this.adjacencyList);
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.print();

graph.removeVertex("A");
// graph.removeEdge("B", "C");
graph.print();
// console.log("hasEdge", graph.hasEdge("A", "C"));
