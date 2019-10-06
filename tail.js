const tail = array => {
  const output = [];
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      output.push(array[i]);
    }
  }
  return output;
};

module.exports = tail;
