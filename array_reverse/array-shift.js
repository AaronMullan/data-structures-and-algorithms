const arr = [1, 2, 3, 4, 5];
const n = 'hi';

const arrayShifter = (n, arr) => {
  let arrayShifted = arr;
  const halfway = arr.length / 2;
  arrayShifted.splice(halfway, 0, n);
  return arrayShifted;
};

const badabing = arrayShifter(n, arr);
console.log(badabing);

module.exports = { arrayShifter };
