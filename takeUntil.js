const takeUntil = (array, callback) => {
  const output = [];

  for (let element of array) {
    if (callback(element)) return output;
    output.push(element);
  }

  return output;
};

module.exports = takeUntil;
