//1.1 Is Unique:
//implement an alogorithm to determine if a sting has all unique characters.
//what if you cannot use additional data structures

const isUnique = (str) => {
  let strObj = {};
  for (let i = 0; i < str.length; i++) {
    if (strObj[str[i]] === undefined) {
      strObj[str[i]] = 1;
    } else {
      strObj[str[i]]++;
    }
  }
  let charVals = Object.values(strObj);
  for (let i = 0; i < charVals.length; i++) {
    if (charVals[i] > 1) {
      return false;
    }
  }
  return true;
};
