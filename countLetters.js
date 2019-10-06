const countLetters = sentence => {
  const output = {};
  const lettersOnly = sentence.toLowerCase().split(" ").join("");

  for (let letter of lettersOnly) {
    if (!output[letter]) {
      output[letter] = 1;
    } else {
      output[letter]++;
    }
  }

  return output;
};

exports.module = countLetters;
