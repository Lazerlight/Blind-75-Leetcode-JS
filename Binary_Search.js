/* Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity. */

// My Solution:

var search = function (nums, target) {
  let result = -1;

  nums.forEach((el) => {
    if (el === target) {
      result = nums.indexOf(target);
    }
  });
  return result;
};
