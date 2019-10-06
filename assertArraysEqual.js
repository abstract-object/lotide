const eqArrays = require("eqArrays");

const assertArraysEqual = (actual, expected) => {
  const results = [["✅", "Passed", '='], ["🛑", "Failed", '!']];
  let result;

  if (eqArrays(actual, expected)) result = results[0];
  else result = results[1];
  console.log(`${result[0]} Assertion ${result[1]}: ${JSON.stringify(actual)} ${result[2]}== ${JSON.stringify(expected)}`);
};

module.exports = assertArraysEqual;
