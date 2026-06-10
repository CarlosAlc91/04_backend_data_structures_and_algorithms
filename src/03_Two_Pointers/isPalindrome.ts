/**
 * Valid Palindrome - Two Pointers with ASCII
 * 
 * Determines if a string reads the same forward and backward,
 * ignoring non-alphanumeric characters and case sensitivity.
 * 
 * Time Complexity: O(n) - each character is processed at most once
 * Space Complexity: O(1) - only two pointers are used
 * 
 * @param s - Input string containing printable ASCII characters
 * @returns true if the string is a palindrome, false otherwise
 */

function isPalindrome(string: string): boolean {
  //helper function to check if a character is alphanumeric
  const isAlphanumeric = (char: string): boolean => {
    const code = char.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) ||
      (code >= 65 && code <= 90) ||
      (code >= 97 && code <= 122)
    );
  }; //isAlphanumeric closing

  //Initialize two pointers left and right
  let left = 0;
  let right = string.length - 1;

  //Main loop: continue until meet or cross
  while (left < right) {
    // skip non-alphanumeric characters from left
    while (left < right && !isAlphanumeric(string[left]!)) {
      left++;
    }
    //Skip non-alphanumeric characters from right
    while (left < right && !isAlphanumeric(string[right]!)) {
      right--;
    }

    //compare two charactes (case-insensitive)
    if (string[left]!.toLowerCase() !== string[right]!.toLowerCase()) {
      return false;
    }

    //Move pointers inwards
    left++;
    right--;
  }

  return true;
}

const s = "Was it a car or a cat I saw?";
console.log(isPalindrome(s));

const s2 = "tab a cat";
console.log(isPalindrome(s2));

