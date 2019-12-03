const { arrayReverser } = require('../array-reverse.js');

describe('reverses arrays', () => {
  it('makes arrays backwards', () => {
    expect(arrayReverser([1, 2, 3])).toEqual[3, 2, 1];
  });
});
