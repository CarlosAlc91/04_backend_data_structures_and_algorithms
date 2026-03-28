/**
 * Valid Anagram - Frequency Counter
 * 
 * Given two strings s and t, return true if they are anagrams of each other.
 * An anagram contains the exact same characters with the same frequencies.
 * 
 * Time Complexity: O(n) - we traverse both strings once
 * Space Complexity: O(1) - at most 26 characters (lowercase English letters)
 * 
 * @param s - First string
 * @param t - Second string
 * @returns true if strings are anagrams, false otherwise
 */
function isAnagram(s: string, t: string): boolean {
    // If lengths differ, they cannot be anagrams
    if (s.length !== t.length) {
        return false;
    }
    
    // Create a frequency counter object
    // Keys are characters, values are their counts
    const count: Record<string, number> = {};
    
    // First pass: count characters in string s
    for (const char of s) {
        // Increment count for this character
        // (count[char] || 0) handles first occurrence (undefined becomes 0)
        count[char] = (count[char] || 0) + 1;
    }
    
    // Second pass: decrement counts using string t
    for (const char of t) {
        // If character doesn't exist or count is 0, we have a mismatch
        if (!count[char]) {
            return false;
        }
        // Decrement the count for this character
        count[char]--;
    }
    
    // All counts should be zero if strings are anagrams
    return true;
}

// Test cases
console.log(isAnagram("racecar", "carrace")); // true
console.log(isAnagram("jar", "jam"));         // false
console.log(isAnagram("amor", "roma"));       // true