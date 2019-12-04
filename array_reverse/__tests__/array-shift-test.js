const { arrayShifter } = require('../array-shift.js');

describe('array shifter', () => {
  it('returns an array with a new value added at the middle index', () => {
    expect(arrayShifter(5, [1, 2, 3, 4])).toEqual[1, 2, 5, 3, 4];
  });
});
