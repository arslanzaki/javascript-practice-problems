const integerReverse = (number) => {
  const reversedNumber = number.toString().split("").reverse().join("");
  return parseInt(reversedNumber) * Math.sign(number);
};

console.log(integerReverse(123));
console.log(integerReverse(990));
console.log(integerReverse(001));
console.log(integerReverse(-8934));
