class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * Adding data to the end of queue
   * @param {*} data
   * @returns {Queue}
   */
  enqueue(data) {
    let newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  /**
   * Removing data from the beginning of the queue
   * @returns Data that is removing from queue
   */
  dequeue() {
    if (!this.first) {
      throw Error(
        'UNDERFLOW::: The queue is empty, there is nothing to remove'
      );
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.data;
  }

  /**
   * @returns First element in the queue
   */
  peek() {
    if (!this.first) {
      throw Error('Stack is empty');
    }
    return this.first.data;
  }
}

// let a = new Queue();
// a.enqueue('lfjna');
// a.enqueue('slkdjg');
// a.enqueue('lsigj');
// console.log(a.peek());
// let b = a.dequeue();
// console.log({ b });
// console.log({ a });
