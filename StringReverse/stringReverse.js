// Solution #01
const stringReverse01 = (str) => {
  return str.split("").reverse().join("");
};

console.log(stringReverse01("Arslan"));
console.log(stringReverse01("GitHub"));

// Solution #02
const stringReverse02 = (str) => {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
};

console.log(stringReverse02("Book"));
console.log(stringReverse02("Apple"));

// Solution #03 [Using Reduce Function]

const stringReverse03 = (str) => {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
};

console.log(stringReverse03("Reduce"));
console.log(stringReverse03("Function"));
