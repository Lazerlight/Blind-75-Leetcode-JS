/* Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum. */

// My Solution 

var maxSubArray = function (nums) {
  let sum = 0;
  let sumSoFar = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > sumSoFar) {
      sumSoFar = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return sumSoFar;
};
