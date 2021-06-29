//There are tgree types of edits that can be performed on strings, insert a character, remove a character, and replace a character.
//Given two strings, write a function that checks if they are one edit (or 0) away

let oneAway = (str1, str2) => {
  let myHash = {};
  let charCount = 0;

  for (let i = 0; i < str1.length; i++) {
    if (myHash[str1[i]]) {
      myHash[str1[i]]++;
    } else {
      myHash[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (myHash[str2[i]]) {
      myHash[str2[i]]--;
    } else {
      myHash[str2[i]] = 1;
    }
  }

  for (let key in myHash) {
    if (myHash[key] > 0) {
      charCount++;
    }
  }

  if (charCount > 2) {
    return false;
  }

  return true;
};
