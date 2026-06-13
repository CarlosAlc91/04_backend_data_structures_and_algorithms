/**
 * 14. Longest Common Prefix
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 */

// Define the function that receives an array of strings and returns the longest common prefix string
function longestCommonPrefix(strs: string[]): string {
  // Edge case: If the array is empty, there is no common prefix, return an empty string
  if (strs.length === 0) return "";

  // Initialize the prefix string assuming the entire first word is the common prefix
  let prefix = strs[0]!;

  // Loop through the rest of the words in the array starting from index 1
  for (let i = 1; i < strs.length; i++) {
    const word = strs[i]!;

    // Keep reducing the prefix until it is found at the very beginning (index 0) of the current word
    while (word.indexOf(prefix) !== 0) {
      // Shorten the prefix by slicing off its last character
      prefix = prefix.slice(0, -1);

      // Early exit: If the prefix becomes completely empty, there is no common prefix among the words
      if (prefix === "") return "";
    }
  }

  // Return the remaining common prefix after checking all words in the array
  return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(
  longestCommonPrefix(["interspecies", "interstellar", "interstate"]),
); // "inters"
