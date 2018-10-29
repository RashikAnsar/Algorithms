/**
 * @author Rashik Ansar
 * Implemtaion of graph with the help of Adjacency List
 * Its Unweighted graph implemetation
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * Adding a vertex to the graph
   * @param {*} vertex The data of the vertex to add into graph
   * @returns {Graph}
   */
  addVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      throw Error(`${vertex} already exist in graph... `);
    } else {
      this.adjacencyList[vertex] = [];
    }
    // return this;
  }

  /**
   * Removing a vertex from the graph
   * @param {*} vertex The data of the vertex to remove from graph
   */
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        const itemInArray = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, itemInArray);
      }
      delete this.adjacencyList[vertex];
      // return this;  // Added for testing before traversal methods
    } else {
      throw Error(`${vertex} doesn't exist...`);
    }
  }

  /**
   * Adding an edge between two vertices in the graph
   * @param {*} vertex1
   * @param {*} vertex2
   */
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      // return this;
    } else {
      throw Error('Given vertex/vertices might not exist in graph...');
    }
  }

  /**
   * Removing an existing edge between two vertices in the graph
   * @param {*} vertex1
   * @param {*} vertex2
   */
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        i => i !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        i => i !== vertex1
      );
      // return this;
    } else {
      throw Error('Given vertex/vertices might not exist in graph...');
    }
  }

  /**
   * Travesal of the graph by breadth-first approach
   * @param {*} start
   */
  breadthFirstTraversal(start) {
    const queue = [];
    const result = [];
    const visited = {};
    let current;
    queue.push(start);
    visited[start] = true;

    while (queue.length) {
      current = queue.shift();
      result.push(current);
      this.adjacencyList[current].forEach(x => {
        if (!visited[x]) {
          visited[x] = true;
          queue.push(x);
        }
      });
    }
    return result;
  }

  // Depth First Traversal (recursive approach)
  DFTrecursuive(start) {
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList;
    function dfs(vertex) {
      if (!vertex) {
        throw Error('Incorrect starting vertex!');
      }
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(x => {
        if (!visited[x]) {
          return dfs(x);
        }
      });
    }
    dfs(start);
    return result;
  }
  // Depth First Traversal (Iterative approach)
  DFTiterative(start) {
    const stack = [];
    const visited = {};
    const result = [];
    let current;

    stack.push(start);
    visited[start] = true;
    while (stack.length) {
      current = stack.pop();
      result.push(current);
      this.adjacencyList[current].forEach(x => {
        if (!visited[x]) {
          visited[x] = true;
          stack.push(x);
        }
      });
    }
    return result;
  }
}

let a = new Graph();
a.addVertex('A');
a.addVertex('B');
a.addVertex('C');
a.addVertex('D');
a.addVertex('E');
a.addVertex('F');
a.addEdge('A', 'B');
a.addEdge('A', 'C');
a.addEdge('B', 'D');
a.addEdge('C', 'E');
a.addEdge('D', 'E');
a.addEdge('D', 'F');
a.addEdge('E', 'F');
// console.log(a);
// a.removeVertex('Hong Kong');
// console.log(a);
// a.removeVertex('Aspen');
let b = a.breadthFirstTraversal('A');
console.log(b);
b = a.DFTiterative('A');
console.log(b);
b = a.DFTrecursuive('A');
console.log(b);
