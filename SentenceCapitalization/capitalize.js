// Solution #01

const capitalize01 = (sentence) => {
  const words = [];

  for (let word of sentence.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words;
};

console.log(capitalize01("hello world"));

// Solution #02

const capitalize02 = (sentence) => {
  let result = sentence[0].toUpperCase();

  for (let i = 1; i < sentence.length; i++) {
    if (sentence[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
};
