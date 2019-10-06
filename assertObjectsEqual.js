const eqObjects = require("./eqObjects.js");

const assertObjectsEqual = (actual, expected) => {
  const results = [["✅", "Passed", '='], ["🛑", "Failed", '!']];
  let result;

  if (eqObjects(actual, expected)) result = results[0];
  else result = results[1];
  console.log(`${result[0]} Assertion ${result[1]}: ${JSON.stringify(actual)} ${result[2]}== ${JSON.stringify(expected)}`);
};

module.exports = assertObjectsEqual;
