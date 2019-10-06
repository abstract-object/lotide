const without = (source, toRemove) => {
  const output = [];
  for (let element of source) {
    if (!toRemove.includes(element)) output.push(element);
  }
  return output;
};

module.exports = without;
