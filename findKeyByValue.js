const findKeyByValue = (input, target) => {
  for (let key of Object.keys(input)) {
    if (input[key] === target) return key;
  }
  return;
};

module.exports = findKeyByValue;
