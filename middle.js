const middle = array => {
  const output = [];
  if (array.length > 2) {
    let adjLength = array.length % 2 === 0 ? array.length - 1 : array.length;
    output.push(array[Math.floor(adjLength / 2)]);
    if (array.length % 2 === 0) output.push(array[Math.ceil(adjLength / 2)]);
  }
  return output;
};

module.exports = middle;
