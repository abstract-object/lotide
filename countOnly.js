const countOnly = (allItems, itemsToCount) => {
  const output = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (!output[item]) {
        output[item] = 1;
      } else {
        output[item]++;
      }
    }
  }

  return output;
};

exports.module = countOnly;
