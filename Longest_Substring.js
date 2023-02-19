/* Given a string s, find the length of the longest 
substring
 without repeating characters. */

// My Solution: 

var lengthOfLongestSubstring = function (s) {
  let longestLength = 0;
  let charMap = new Map();
  let startID = 0;

  for (let endID = 0; endID < s.length; endID++) {
    let currentChar = s[endID];

    if (charMap.has(currentChar) && charMap.get(currentChar) >= startID) {
      startID = charMap.get(currentChar) + 1;
    }
    charMap.set(currentChar, endID);
    longestLength = Math.max(longestLength, endID - startID + 1);
  }
  return longestLength;
};
