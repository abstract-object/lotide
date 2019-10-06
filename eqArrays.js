const eqArrays = (sinister, dexter) => {
  if (sinister.length !== dexter.length) return false;

  for (let i = 0; i < dexter.length; i++) {
    if (sinister[i] !== dexter[i]) return false;
  }

  return true;
};

module.exports = eqArrays;
