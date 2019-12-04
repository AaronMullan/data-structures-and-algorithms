const { arrayShifter } = require('../array-shift.js');

describe('array shifter', () => {
  it('returns an array with a new value added at the middle index', () => {
    expect(arrayShifter(5, [1, 2, 3, 4])).toEqual[1, 2, 5, 3, 4];
  });
  it('returns an array with a new value added at the middle index minus .5 where index is an even number', () => {
    expect(arrayShifter(5, [1, 2, 3, 4, 5])).toEqual[1, 2, 5, 3, 4, 5];
  });
  it('returns an array with a string added at the middle index when given a string as input', () => {
    expect(arrayShifter('hi', [1, 2, 3, 4, 5])).toEqual[1, 2, 'hi', 3, 4, 5];
  });
});
