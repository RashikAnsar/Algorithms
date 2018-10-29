class HashTable {
  constructor(size = 47) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }
    return undefined;
  }

  values() {
    let valArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valArray.includes(this.keyMap[i][j][1])) {
            valArray.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valArray;
  }

  keys() {
    let keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArray.includes(this.keyMap[i][j][0])) {
            keysArray.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArray;
  }
}

let a = new HashTable();
a.set('hello world', 'goodbye!!');
a.set('dogs', 'are cool');
a.set('cats', 'are fine');
a.set('i love', 'pizza');
// console.log(a);
// let b = a.get('hello world');
// console.log(b);
// b = a.get('dogs');
// console.log(b);
// b = a.get('flkgmfk');
// console.log(b);
let b = a.values();
console.log(b);
b = a.keys();
console.log(b);
