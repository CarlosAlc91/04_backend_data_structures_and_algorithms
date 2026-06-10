/**
 * Group Anagrams - Character Count (Optimized)
 *
 * Given an array of strings, group all anagrams together using a frequency array.
 * Instead of sorting, we count how many times each letter appears.
 *
 * Time Complexity: O(n * k) - where n = number of strings, k = max length of a string
 * Space Complexity: O(n * k) - we store all original strings in the map
 *
 * @param strs - Array of strings (assumes only lowercase 'a' to 'z')
 * @returns Array of grouped anagrams
 */

function groupAnagram(words: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const word of words) {
    const count = new Array(26).fill(0);

    for (const char of word) {
      count[char.charCodeAt(0) - 97]++;
    }

    const key = count.join("#");

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)?.push(word);
  }
  return Array.from(map.values());
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagram(input));
