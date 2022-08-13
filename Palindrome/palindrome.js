// Solution #01

const isPalindrome01 = (str) => {
  return str.split("").reverse().join("") === str;
};

console.log(isPalindrome01('apple'));
console.log(isPalindrome01('bob'));
console.log(isPalindrome01('abba'));
console.log(isPalindrome01('cat'));


// Solution #02 [Using Every Function]
const isPalindrome02 = (str) => {
    return str.split("").every((char,i)=> {
        return char === str[str.length-i-1]
    })
}

console.log(isPalindrome01('gig'));
console.log(isPalindrome01('wig'));
console.log(isPalindrome01('dom'));
console.log(isPalindrome01('cool'));