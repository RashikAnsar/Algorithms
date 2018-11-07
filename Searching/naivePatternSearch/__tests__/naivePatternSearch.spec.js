const naivePatternSearch = require('../naivePatternSearch');

describe('String-Pattern Search tests', () => {
  test('should search for given pattern in the string', () => {
    expect(naivePatternSearch('aaabbcbaabcabcaaabcaccaabcaade', 'abc')).toBe(4);
  });

  test('should return the number of times pattern seen in string', () => {
    expect(naivePatternSearch('meow', 'ow')).toBe(1);
  });

  test("search for pattern which doesn't exist and return 0", () => {
    expect(naivePatternSearch('aaaaaaaaaaa', 'bbb')).toBe(0);
  });
});
