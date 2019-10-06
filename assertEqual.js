const assertEqual = (actual, expected) => {
  const results = [["✅", "Passed", '='], ["🛑", "Failed", '!']];
  let result;

  if (actual === expected) result = results[0];
  else result = results[1];
  console.log(`${result[0]} Assertion ${result[1]}: ${actual} ${result[2]}== ${expected}`);
};

assertEqual("a", "a");
assertEqual("a", "b");
assertEqual(1, 1);
assertEqual(1, 0);
