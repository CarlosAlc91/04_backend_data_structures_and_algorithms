/**
 * 
 * Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

*An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

*Example 1:

*Input: s = "racecar", t = "carrace"

*Output: true
*Example 2:

*Input: s = "jar", t = "jam"

*Output: false
*Constraints:

*s and t consist of lowercase English letters
 */

function isAnagram(string1: string, string2: string): boolean {
  if (string1.length !== string2.length) {
    return false;
  }

  const count: Record<string, number> = {};

  for (let char of string1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of string2) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }

  return true;
}

console.log(isAnagram("racecar", "carrace"));
console.log(isAnagram("jar", "jam"));
