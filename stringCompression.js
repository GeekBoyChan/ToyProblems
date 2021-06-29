//Implement a method to preform basic string compression using the counts of repeated characters.

let stringCompression = (str) => {
  let result = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    let cur = str[i];
    if (cur === str[i + 1]) {
      count++;
    } else {
      result += cur + count;
      count = 1;
    }
  }

  if (str.length <= result.length) {
    return str;
  }

  return result;
};
