const HashTable = require('../hashTable');

describe('Hash table tests', () => {
  test('create a hash table with specified size', () => {
    const defaultHashTable = new HashTable();
    expect(defaultHashTable.keyMap.length).toBe(47);

    const customHashTable = new HashTable(20);
    expect(customHashTable.keyMap.length).toBe(20);

    const largeHashTable = new HashTable(80);
    expect(largeHashTable.keyMap.length).toBe(80);
  });

  test('test hash function', () => {
    let testHash = new HashTable();
    expect(testHash._hash('a')).toBe(1);
    expect(testHash._hash('b')).toBe(2);
    expect(testHash._hash('c')).toBe(3);
    expect(testHash._hash('d')).toBe(4);
    expect(testHash._hash('a')).toBe(1);
  });

  const sampleHashTable = new HashTable();
  sampleHashTable.set('a', 'hello world');
  sampleHashTable.set('b', 'how are you?');
  sampleHashTable.set('c', 'good bye');

  test('set a key-value pair into hash table', () => {
    expect(sampleHashTable.keys().includes('a')).toBe(true);
    expect(sampleHashTable.keys().includes('b')).toBe(true);
    expect(sampleHashTable.keys().includes('c')).toBe(true);
    expect(sampleHashTable.keys().includes('d')).toBe(false);
  });

  test('get a key-value pair from hash table', () => {
    expect(sampleHashTable.get('a')).toEqual(['a', 'hello world']);
    expect(sampleHashTable.get('b')).toEqual(['b', 'how are you?']);
    expect(sampleHashTable.get('c')).toEqual(['c', 'good bye']);
    expect(sampleHashTable.get('d')).toBe(undefined);
  });

  test('returns all the keys', () => {
    expect(sampleHashTable.keys()).toEqual(['a', 'b', 'c']);
  });
  test('returns all the values', () => {
    expect(sampleHashTable.values()).toEqual([
      'hello world',
      'how are you?',
      'good bye'
    ]);
  });
});
