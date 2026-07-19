/**
 * Longest Substring Without Repeating Characters
 *
 * Given a string s, find the length of the longest substring without
 * repeating characters.
 *
 */

//1. Function declaration
const lengthOfLongestSubstring = (s: string): number => {
  //2. Set creation to store unique characters currently in our active window.
  const charSet = new Set<string>();

  //3. Initialize the left pointer at the beginning of the string.
  let left = 0;

  //4. Initialize maxLength to 0 to keep track of the best result found.
  let maxLength: number = 0;

  //5. Start a loop with right pointer to iterate through every character.
  for (let right = 0; right < s.length; right++) {
    //6. Get the actual letter stting at index right
    const currentChar = s[right]!;

    //7. If the current character is already in the set, it's a duplicate.
    //looping with while to remove characters starting from left until
    //the duplicate is gone.
    while (charSet.has(currentChar)) {
      //8. Remove the char on the far-left edge from our set.
      charSet.delete(s[left]!);
      //9. Shrink the window from the left
      left++;
    }

    //10. Once the window is clean and free of duplicates, add the new unique letter.
    charSet.add(currentChar);

    //11. Calculate the size of the current window (right - left + 1)

    const currentWindowSize = right - left + 1;
    //12. Compare the current window size with our historic record (maxLength)
    if (currentWindowSize > maxLength) {
      //13. If the current window is larger, update maxLength with this new high score.
      maxLength = currentWindowSize;
    }
  }

  //13. Return the final maximum length found.
  return maxLength;
};

const s: string = "abcabcbb";
console.log(lengthOfLongestSubstring(s));

const s1: string = "bbbbb";
console.log(lengthOfLongestSubstring(s1));

const s2: string = "pwwkew";
console.log(lengthOfLongestSubstring(s2));
