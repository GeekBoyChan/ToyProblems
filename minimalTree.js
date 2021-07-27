class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let minimalTree = (nums) => {
  if (nums === null || nums.length === 1) {
    return null;
  }

  return BSTRecursive(nums, 0, nums.length - 1);
};

let BSTRecursive = (nums, left, right) => {
  if (left > right) {
    return null;
  }

  let mid = left + (right - left) / 2;
  let current = new TreeNode(nums[mid]);
  current.left = BSTRecursive(nums, left, mid - 1);
  current.right = BSTRecursive(nums, mid + 1, right);
  return current;
};

let arr = [-13, -10, -3, 0, 5, 9, 12];
let test = minimalTree(arr);
console.log(test);
