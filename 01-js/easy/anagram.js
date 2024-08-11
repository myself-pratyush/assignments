/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
   => if all letters of one word are in another word and vice versa, then those are anagrams.
   => Ignore spaces and capitalization.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().split('').sort().join('').trim();
  str2 = str2.toLowerCase().split('').sort().join('').trim();
  return str1 === str2;
}

module.exports = isAnagram;
