const linearSearch = require('../linearSearch');

describe('Linear Search tests', () => {
  const a = [1, 2, 3, 1, 1, 525, 5884, 545, 6854, 3, 1, 4];
  test('should search for given number in the array', () => {
    expect(linearSearch(a, 1)).toEqual(['0', '3', '4', '10']);
  });

  test('should return array with single element', () => {
    expect(linearSearch(a, 525)).toEqual(['5']);
  });

  test("search for number which doesn't exist in array", () => {
    expect(linearSearch(a, 5)).toBe(-1);
  });
});
