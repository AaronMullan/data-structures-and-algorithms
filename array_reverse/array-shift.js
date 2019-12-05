const arrayShifter = (n, arr) => {
  let arrayShifted = arr;
  const halfway = arr.length / 2;
  arrayShifted.splice(halfway, 0, n);
  return arrayShifted;
};


module.exports = { arrayShifter };
