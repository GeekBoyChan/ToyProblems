//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/*
Examples
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

Input: nums = [0]
Output: 1
Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.
*/

var missingNumber = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });

  if (nums[0] !== 0) {
    return 0;
  }

  for (let i = 1; i <= nums.length; i++) {
    let expectedNum = nums[i - 1] + 1;
    if (nums[i] !== expectedNum) {
      return expectedNum;
    }
  }
};
