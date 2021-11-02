//You are climbing a staircase. It takes n steps to reach the top.

/*
Examples
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

var climbStairs = function(n) {
  if(n === 0 || n === 1){
      return 1;
  }

  let first = 1;
  let second = 1;

  for(let i = 2; i <= n; i++){
      let third = first + second;
      first = second;
      second = third;
  }

  return second;
};