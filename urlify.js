//Write a method to replace all spaces in a string with '%20'

const urlify = (str) => {
  let strArr = str.split(' ');
  let result = strArr.join('%20');
  return result;
};
