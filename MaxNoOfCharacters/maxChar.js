const maxChar = (str) => {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let character of str) {
    if (charMap[character]) {
      charMap[character]++;
    } else {
      charMap[character] = 1;
    }
  }

  for (let character in charMap) {
    if (charMap[character] > max) {
      max = charMap[character];
      maxChar = character;
    }
  }

  return maxChar;
};

console.log(maxChar("Arslan"));
