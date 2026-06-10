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
function isAnagram(string1: string, string2: string): boolean {
  /*const s1 = string1.toLowerCase();
    const s2 = string2.toLowerCase(); */

  // LINE 1: Quick length check
  // If the strings have different lengths, they cannot be anagrams
  // This is an O(1) optimization that allows us to return early
  // Example: "abc" vs "abcd" → false immediately
  if (string1.length !== string2.length) {
    return false;
  }

  // LINE 2: Create a frequency counter object
  // This object will store each character as a key and its count as the value
  // Record<string, number> means: keys are strings, values are numbers
  // Example: after counting "racecar", it would be: { r: 2, a: 2, c: 2, e: 1 }
  const count: Record<string, number> = {};

  // LINE 3: First pass - count characters from the first string
  // We iterate through each character in string1 using for...of loop
  for (let char of string1) {
    // LINE 4: Increment the count for this character
    // (count[char] || 0) handles the first occurrence:
    //   - If count[char] exists, use its current value
    //   - If it doesn't exist (undefined), use 0 as the starting point
    // Then add 1 to increment the count
    // Example: first time seeing 'r' → (undefined || 0) = 0 → 0 + 1 = 1
    //          second time seeing 'r' → (1 || 0) = 1 → 1 + 1 = 2
    count[char] = (count[char] || 0) + 1;
  }

  // LINE 5: Second pass - subtract counts using the second string
  // We iterate through each character in string2
  for (let char of string2) {
    // LINE 6: Check if the character exists in our counter
    // If count[char] is undefined or 0, we have a mismatch:
    //   - undefined → character appears in string2 but not in string1
    //   - 0 → character appears more times in string2 than in string1
    // Example: if string1 = "jar", string2 = "jam"
    //          When we reach 'm', count['m'] is undefined → return false
    if (!count[char]) {
      return false;
    }

    // LINE 7: Decrement the count for this character
    // Each character in string2 cancels out one occurrence from string1
    // Example: 'r' in string2 → count['r'] goes from 2 to 1
    //          'r' again → goes from 1 to 0
    count[char]--;
  }

  // LINE 8: If we passed both loops without returning false
  // That means all characters from string2 matched with characters from string1
  // All counts should now be zero (balanced between both strings)
  // Return true to indicate the strings are anagrams
  return true;
}

// Test cases
console.log(isAnagram("racecar", "carrace")); // true
console.log(isAnagram("jar", "jam")); // false
console.log(isAnagram("amor", "roma")); // true
