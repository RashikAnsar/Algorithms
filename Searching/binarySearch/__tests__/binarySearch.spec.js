const binarySearch = require('../binarySearch');

describe('Binary Search tests', () => {
  let a = [1, 12, 23, 45, 65, 67, 78, 98, 233];
  // let z = binarySearch(a, 12);
  // console.log(z);

  test('should search for given number in the array return index', () => {
    expect(binarySearch.binarySearch(a, 12)).toBe(1);
  });

  test('should search for given number in the array return index', () => {
    expect(binarySearch.binarySearch(a, 67)).toBe(5);
  });

  test('should search for given number in the array return null', () => {
    expect(binarySearch.binarySearch(a, 245)).toBe(null);
  });
});
