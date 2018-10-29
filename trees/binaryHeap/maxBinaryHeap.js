class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(data) {
    this.values.push(data);
    this.bubbleUp();
    return this;
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    console.log({ max });
    return max;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
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
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (!swap && rightChild > element) ||
          (swap && rightChild > leftChild)
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

let a = new MaxBinaryHeap();
// 41, 39, 33, 18, 27, 12
a.insert(41);
a.insert(39);
a.insert(33);
a.insert(18);
a.insert(27);
a.insert(12);
a.insert(55);
// a.insert(1);
// a.insert(45);
console.log(a.values);
a.extractMax();
console.log(a.values);
a.extractMax();
console.log(a.values);
a.extractMax();
console.log(a.values);
a.extractMax();
console.log(a.values);
a.extractMax();
console.log(a.values);
a.extractMax();
console.log(a.values);
a.extractMax();
console.log(a.values);
