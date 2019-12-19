const validator = require('./multi-bracket-validation');
describe('CueWithStacks methods', () => {
  
  let bunchaBrackets = '{} [] ()';
  it('correctly identifies a string with balanced numbers of brackets', () => {
    expect(validator(bunchaBrackets)).toEqual(true);

  });
});
