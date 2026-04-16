/**
 * Valid Anagram - Frequency Counter
 *
 * Given two strings, determine if they are anagrams of each other.
 * An anagram contains the exact same characters with the same frequencies.
 *
 * Time Complexity: O(n) - we traverse both strings once
 * Space Complexity: O(1) - at most 26 characters (lowercase English letters)
 *
 * @param string1 - First string
 * @param string2 - Second string
 * @returns true if the strings are anagrams, false otherwise
 */

const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) {
    return false;
  }

  const counter: Record<string, number> = {};

  for (const char of s) {
    counter[char] = (counter[char] || 0) + 1;
  }

  for (const char of t) {
    if (!counter[char]) {
      return false;
    }

    counter[char]--;
  }

  return true;
};

// Test cases
console.log(isAnagram("racecar", "carrace")); // true
console.log(isAnagram("jar", "jam")); // false
console.log(isAnagram("amor", "roma")); // true
