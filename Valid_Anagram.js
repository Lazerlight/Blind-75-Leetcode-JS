/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

// My Solution:

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (t.includes(char) && t.length > 0) t = t.replace(char, "");
    else return false;
  }
  return true;
};
