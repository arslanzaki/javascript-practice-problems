// Solution #01
const arrayChunk01 = (arr, chunkSize) => {
  const chunked = [];
  for (let el of arr) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === chunkSize) {
      chunked.push([el]);
    } else {
      last.push(el);
    }
  }
  return chunked;
};

console.log(arrayChunk01(["B", "O", "O", "K"], 2));

// Solution #02

const arrayChunk02 = (arr, chunkSize) => {
  const chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + chunkSize));
    index = index + chunkSize;
  }

  return chunked;
};
console.log(arrayChunk02([1, 2, 4, 6], 2));
