/*14. Longest Common Prefix
Easy
Topics
premium lock icon
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.;

*/

const longestCommonPrefix = (strs: string[]): string | undefined => {
  if (strs.length === 0) return "";

  const firstStr = strs[0];
  if (!firstStr) return "";

  for (let i = 0; i < firstStr.length; i++) {
    const currentChar = firstStr[i];

    for (let j = 1; j < strs.length; j++) {
      const current = strs[j];

      if (!current || i >= current.length || current[i] !== currentChar) {
        return firstStr.substring(0, i);
      }
    }
  }
  return firstStr;
};

const strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
