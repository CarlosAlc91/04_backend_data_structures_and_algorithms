/**
 * *Longest Common Prefix
 *
 * *Write a function to find the longest common prefix string amongst
 * an array of strings.
 *
 * *If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *Input: strs = ["flower","flow","flight"]
 *Output: "fl"
 *Example 2:
 *
 *Input: strs = ["dog","racecar","car"]
 *Output: ""
 *Explanation: There is no common prefix among the input strings.;
 *
 */

//1. Function declaration
const longestCommonPrefix = (strs: string[]): string => {
  //2. If the array is empty retun an empty string, no common prefix found.
  if (strs.length === 0) return "";

  //3. Take the first string as our reference point to compare against the others.
  const firstStr = strs[0];

  //4. Loop through each char of the first string (Vertical Scanning)
  for (let i = 0; i < firstStr.length; i++) {
    //5.
    const currentChar = firstStr[i];

    //6. Compare this char with the character at the same position i in all
    //other strings.
    for (let j = 1; j < strs.length; j++) {
      //7.
      const currentWord = strs[j];

      //8. If the current word is shorter than i, or the char does not match
      // we have found the end of the longest common prefix.
      if (i >= currentWord.length || currentWord[i] !== currentChar) {
        //9. Return the substring from the beginning up to the current
        //index i.
        return firstStr.substring(0, i);
      }
    }
  }

  //10. If the loop finishes without any mismatch, the entire first
  //string is the prefix.
  return firstStr;
};

const strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
