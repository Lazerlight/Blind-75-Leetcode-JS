/* You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API. */

// My Solution:

var solution = function (isBadVersion) {
  return function (n) {
    if (n < 0) return isBadVersion(1);

    let min = 1;
    let max = n;
    let mid;

    while (min <= max) {
      mid = min + Math.floor((max - min) / 2);
      let badVersion = isBadVersion(mid);

      if (badVersion) {
        let pastVersion = isBadVersion(mid - 1);
        if (!pastVersion) {
          return mid;
        }
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }
  };
};
