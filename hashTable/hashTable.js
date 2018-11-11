class HashTable {
  /**
   * accepts size of the array
   *
   * By default it initalizes with 47
   * @param {number} size
   */
  constructor(size = 47) {
    this.keyMap = new Array(size);
  }

  /**
   * Private method to hash the keys
   * @param {*} key
   */
  _hash(key) {
    let total = 0;
    // Prime number for better hash function
    const RANDOM_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * RANDOM_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  /**
   * Accepts a key and a value
   *
   * Stores the key-value pair in the hash table array via separate chaining
   * @param {*} key
   * @param {*} value
   * @returns {HashTable}
   */
  set(key, value) {
    // Hash the key
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return this;
  }

  /**
   * Accepts a Key
   *
   * Retrieves the key-value pair in the hash table.
   *
   * If the key isn't found, returns undefined
   * @param {*} key
   */
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

  /**
   * Returns all the values from the hash table as array
   */
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

  /**
   * Returns all the keys from the hash table as array
   */
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

module.exports = HashTable;
