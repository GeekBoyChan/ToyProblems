//Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

/*
Examples

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Input: nums = [1,1]
Output: [2]

*/

var findDisappearedNumbers = function (nums) {
  let numHash = {};
  let missingNums = [];

  debugger;

  for (let i = 0; i < nums.length; i++) {
    if (numHash[nums[i]] === undefined) {
      numHash[nums[i]] = true;
    }
  }

  for (let j = 1; j <= nums.length; j++) {
    if (numHash[j] === undefined) {
      missingNums.push(j);
    }
  }

  return missingNums;
};
