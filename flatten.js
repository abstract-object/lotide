const flatten = array => {
  const output = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      output.concat(flatten(element));
    } else {
      output.push(element);
    }
  }
  return output;
};

module.exports = flatten;
