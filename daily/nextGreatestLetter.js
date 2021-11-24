/*
Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.

Note that the letters wrap around.

For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.

Examples
Input: letters = ["c","f","j"], target = "a"
Output: "c"

Input: letters = ["c","f","j"], target = "c"
Output: "f"

Input: letters = ["c","f","j"], target = "d"
Output: "f"

Input: letters = ["c","f","j"], target = "g"
Output: "j"

Input: letters = ["c","f","j"], target = "j"
Output: "c"
 */

var nextGreatestLetter = function (letters, target) {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target) {
      return letters[i];
    }
  }
  return letters[0];
};
