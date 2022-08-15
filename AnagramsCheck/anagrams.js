// Solution #01
const anagramsCheck = (strA, strB) => {
  const aCharMap = buildCharMap(strA);
  const bCharMap = buildCharMap(strB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
};

const buildCharMap = (str) => {
  const charMap = {};

  for (let char of str.replace(/[^w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
};

console.log(anagramsCheck("cat", "tac"));

// Solution #02

const anagramsCheck02 = (strA, strB) => {
  return cleanStr(strA) === cleanStr(strB);
};

const cleanStr = (str) => {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};

console.log(anagramsCheck02("cat", "tac"));
