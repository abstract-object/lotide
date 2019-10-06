const letterPositions = sentence => {
  const output = {};
  const lettersOnly = sentence.toLowerCase().split(" ").join("");

  for (let position in lettersOnly) {
    if (!output[lettersOnly[position]]) {
      output[lettersOnly[position]] = [];
    }
    output[lettersOnly[position]].push(position);
  }

  return output;
};

module.exports = letterPositions;
