class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * Adding data into the stack
   * @param {*} data
   * @returns {Stack}
   */
  push(data) {
    let newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }

  /**
   * Removing top data of the stack
   * @returns The data that is removing from the stack
   */
  pop() {
    if (!this.first) {
      throw Error('UNDERFLOW :::: Stack is empty, there is nothing to remove');
    }
    let current = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = current.next;
    this.size--;
    return current.data;
  }

  /**
   * @returns Top most element of the stack
   */
  peek() {
    if (!this.first) {
      throw Error('Stack is empty');
    }
    return this.first.data;
  }
}

let a = new Stack();
a.push('alpha');
a.push('beta');
a.push('bsgeta');
a.push('bsgsgdhgdSRHETHSRTeta');
console.log(a);

// let b = a.peek();
// console.log(b);
// a.pop();
// a.pop();
// a.pop();
