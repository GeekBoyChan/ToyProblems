function hasPalindromePermutation(theString) {
  // Check if any permutation of the input is a palindrome
  let palindromeHash = {};

  for (let i = 0; i < theString.length; i++) {
    let currentLetter = theString[i];
    if (palindromeHash[currentLetter] === undefined) {
      palindromeHash[currentLetter] = true;
    } else {
      delete palindromeHash[currentLetter];
    }
  }

  return Object.keys(palindromeHash).length <= 1;
}
