const { arrayReverse } = require('../array-reverse.js');

describe('reverses arrays', () => {
  it('makes arrays backwards', () => {
    expect(arrayReverse([1, 2, 3])).toEqual[3, 2, 1];
  });
});
