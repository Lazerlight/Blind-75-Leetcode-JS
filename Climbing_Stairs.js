/* You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? */

// My Solution

var climbStairs = function(n) {
    let array = [1,2];

    for(let i = 2; i <= n; i++){
        array[i] = array[i - 1] + array[i - 2]
    }
    return array[n-1]
};
