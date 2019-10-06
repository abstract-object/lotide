const flatten = array => {
  let output = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      output = output.concat(element);
    } else {
      output.push(element);
    }
  }
  return output;
};

module.exports = flatten;

console.log(JSON.stringify(flatten([1, 2, [3, 4], 5, [6]])))
