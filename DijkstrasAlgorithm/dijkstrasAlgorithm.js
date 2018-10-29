/**
 * @author Rashik Ansar
 *
 * This algorithm name given after Edgar Dijkstra
 * implementation of Dijkstras shortest path Algorithm
 * Prerequisites to implement/learn Dijkstra's Algorithm are 'WeightedGraph' and 'PriorityQueue/BinaryHeap'
 */

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      throw Error(`${vertex} already exist in graph... `);
    } else {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
      this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
      // return this;
    } else {
      throw Error('Given vertex/vertices might not exist in graph...');
    }
  }

  DijkstrasShortestPath(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    for (let x in this.adjacencyList) {
      if (x === start) {
        distances[x] = 0;
        nodes.enqueue(x, 0);
      } else {
        distances[x] = Infinity;
        nodes.enqueue(x, Infinity);
      }
      previous[x] = null;
    }
    while (nodes.values.length) {
      smallest = nodes.dequeue().data;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let current = distances[smallest] + nextNode.weight;
          let next = nextNode.vertex;
          if (current < distances[next]) {
            distances[next] = current;
            previous[next] = smallest;
            nodes.enqueue(next, current);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(data, priority) {
    let temp = new Node(data, priority);
    this.values.push(temp);
    this.bubbleUp();
    return this;
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      // if (element.priority <= parent.priority) break; //maxBinaryHeap condition
      if (element.priority >= parent.priority) break; //minBinaryHeap condition
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        // Change below comparision operators to make maxBinaryHeap
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        // Change below comparision operators to make maxBinaryHeap
        if (
          (!swap && rightChild.priority < element.priority) ||
          (swap && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (!swap) break;

      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

let a = new WeightedGraph();
a.addVertex('A');
a.addVertex('B');
a.addVertex('C');
a.addVertex('D');
a.addVertex('E');
a.addVertex('F');
a.addEdge('A', 'B', 4);
a.addEdge('A', 'C', 2);
a.addEdge('B', 'E', 3);
a.addEdge('C', 'D', 2);
a.addEdge('C', 'F', 4);
a.addEdge('D', 'E', 3);
a.addEdge('D', 'F', 1);
a.addEdge('E', 'F', 1);
// console.log(a);

let b = a.DijkstrasShortestPath('A', 'E');
console.log(b);
