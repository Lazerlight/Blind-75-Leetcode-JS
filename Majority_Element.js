/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array. */

// My Solution

var majorityElement = function (nums) {
  let map = new Map();
  let majorValue;
  nums.forEach((num) => {
    let count = map.get(num) || 0;
    map.set(num, count + 1);
    if (count + 1 >= nums.length / 2) {
      majorValue = num;
    }
  });
  return majorValue;
};
