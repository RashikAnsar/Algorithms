class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (data === current.data) {
        return undefined;
      }
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (data > current.data) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  search(data) {
    if (!this.root) {
      throw Error('Tree is empty...');
    }
    let current = this.root;
    let searchNode = false;
    while (current && !searchNode) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        searchNode = true;
      }
    }
    if (!searchNode) {
      throw Error('Given data is not present in tree...');
    }
    return current;
  }

  breadthFirstSearch() {
    let node = this.root;
    let dataArray = [];
    let queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      dataArray.push(node.data);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    console.log({ queue });
    console.log({ dataArray });
    return dataArray;
  }

  DFSpreOrder() {
    let dataArray = [];
    let current = this.root;

    function traverse(node) {
      dataArray.push(node.data);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return dataArray;
  }

  DFSpostOrder() {
    let dataArray = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      dataArray.push(node.data);
    }
    traverse(this.root);
    return dataArray;
  }

  DFSinOrder() {
    let dataArray = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      dataArray.push(node.data);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return dataArray;
  }
}

let a = new BinarySearchTree();
a.insert(10);
a.insert(6);
a.insert(15);
a.insert(3);
a.insert(8);
a.insert(20);
// a.insert(7);
// console.log(a);

// let b = a.search(0);
// console.log(b);
a.DFSinOrder();
