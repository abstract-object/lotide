const findKey = (obj, callback) => {
  for (let key of Object.keys(obj)) {
    if (callback(obj[key])) return key;
  }
  return;
};

module.exports = findKey;
