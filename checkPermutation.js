//Given two strings, write a method to decide if one is a permutation of the other

const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  strHash = [];

  for (let i = 0; i < str1.length; i++) {
    if (strHash[str1[i]]) {
      strHash[str1[i]]++;
    } else {
      strHash[str1[i]] = 1;
    }
  }

  for (i = 0; i < str2.length; i++) {
    strHash[str2[i]]--;
  }

  for (let i in strHash) {
    if (strHash[i] !== 0) {
      return false;
    }
  }

  return true;
};
