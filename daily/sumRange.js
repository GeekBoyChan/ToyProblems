/*
Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

Examples
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
*/

class NumArray {
  constructor(nums) {
    this.nums = nums;
  }

  sumRange(index1, index2) {
    if (index1 < 0 || index2 > this.nums.length) {
      return 'index not within bounds of the nums array';
    }

    let sum = 0;
    for (let i = index1; i <= index2; i++) {
      sum += this.nums[i];
    }

    return sum;
  }
}
