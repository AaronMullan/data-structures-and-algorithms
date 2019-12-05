const { arrayBinarySearch } = require('../array-binary-search.js');

describe('binary search', () => {
  it('returns the index of the array’s element that is equal to the search key', () => {
    expect(arrayBinarySearch([1, 2, 3], 2)).toEqual(1);
  });
  it('returns -1 if the key is not in the array', () => {
    expect(arrayBinarySearch([1, 2, 3], 5)).toEqual(-1);
  });
});
