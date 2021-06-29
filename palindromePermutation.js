//Give a string, write a function to check if it is a permutation of a palindrome

let palindromePermutation = (str) => {
  let myHash = {};
  let charCount = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === ' ') {
      continue;
    }
    if (myHash[char]) {
      delete myHash[char];
    } else {
      myHash[char] = 1;
    }
    charCount++;
  }
};
