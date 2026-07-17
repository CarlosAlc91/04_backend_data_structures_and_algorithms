/**
 * Valid Palindrome - Two Pointers with ASCII
 *
 * Determines if a string reads the same forward and backward,
 * ignoring non-alphanumeric characters and case sensitivity.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Time Complexity: O(n) - each character is processed at most once
 * Space Complexity: O(1) - only two pointers are used
 *
 * @param s - Input string containing printable ASCII characters
 * @returns true if the string is a palindrome, false otherwise
 */

function isPalindrome(s: string): boolean {
  // 1. Define a helper function to validate characters using ASCII codes
  const isAlphanumeric = (char: string): boolean => {
    // Get the ASCII decimal code of the character at index 0
    const code = char.charCodeAt(0);

    // Return true if the code belongs to numbers (0-9), UPPERCASE (A-Z), or lowercase (a-z)
    return (
      (code >= 48 && code <= 57) || // ASCII codes for numbers 0 to 9
      (code >= 65 && code <= 90) || // ASCII codes for uppercase letters A to Z
      (code >= 97 && code <= 122) // ASCII codes for lowercase letters a to z
    );
  };

  // 2. Initialize the left pointer at the very beginning of the string (index 0)
  let left = 0;

  // 3. Initialize the right pointer at the very end of the string (last index)
  let right = s.length - 1;

  // 4. Main loop: run as long as the left pointer hasn't met or crossed the right pointer
  while (left < right) {
    // 5. Shift the left pointer to the right if the current character is NOT alphanumeric
    // We add 'left < right' to prevent the pointer from running out of bounds
    // We use '!' to guarantee TypeScript that s[left] is defined (not undefined)
    while (left < right && !isAlphanumeric(s[left]!)) {
      left++; // Move pointer forward
    }

    // 6. Shift the right pointer to the left if the current character is NOT alphanumeric
    while (left < right && !isAlphanumeric(s[right]!)) {
      right--; // Move pointer backward
    }

    // 7. Core comparison: convert both characters to lowercase and check if they mismatch
    if (s[left]!.toLowerCase() !== s[right]!.toLowerCase()) {
      // If they don't match, it means the string cannot be a palindrome
      return false;
    }

    // 8. If they matched, move both pointers inward to check the next pair of characters
    left++; // Advance left pointer toward the center
    right--; // Advance right pointer toward the center
  }

  // 9. If the loop finishes without returning false, every valid pair matched perfectly
  return true;
}
const s = "Was it a car or a cat I saw?";
console.log(isPalindrome(s));

const s2 = "tab a cat";
console.log(isPalindrome(s2));
