/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */

// My Solution: 

var isPalindrome = function (s) {
  const original = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = original.split("").reverse().join("");
  return original === reversed;
};
