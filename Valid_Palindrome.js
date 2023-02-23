/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */

// My Solution: 

var isPalindrome = function (s) {
  try {
    let Arr = s.match(/[A-Za-z0-9]/g);
    let filteredString = Arr.join("").toLowerCase();
    let reverseString = Arr.reverse().join("").toLowerCase();
    if (reverseString === filteredString) {
      return true;
    }
    
    return false;
  } catch (exception) {
    return true;
  }
};
