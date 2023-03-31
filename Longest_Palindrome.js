/* Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here. */

// My Solution 

var longestPalindrome = function (s) {
  let map = new Map();
  let extraChar = 0;
  let palindrome = 0;

  Array.from(s).forEach((e) => {
    let countChars = map.get(e) || 0;
    map.set(e, countChars + 1);
  });

  for (let i = 0; i < map.size; i++) {
    let e = Array.from(map.values())[i];
    if (!(e % 2)) {
      palindrome += e;
    } else if (e % 2) {
      palindrome += e - 1;
      if (extraChar < 1) {
        palindrome++;
        extraChar++;
      }
    }
  }
  return palindrome;
};
