/**
 * Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
 *Example 1:
 *Input: nums = [1, 2, 3, 3]
 *Output: true
 *Example 2:
 *Input: nums = [1, 2, 3, 4]
 *Output: false
 */

// Define a function called "duplicate" that takes an array of numbers
// and returns a boolean (true if duplicates exist, false otherwise).
function duplicate(nums: number[]): boolean {
  // Create an empty Set called "seen".
  const seen = new Set();

  // Loop through each number in the array "nums".
  for (let num of nums) {
    // Check if the current number is already in the Set.
    if (seen.has(num)) {
      // If it is, that means we found a duplicate → return true.
      return true;
    }
    // If not, add the number to the Set so we can check it later.
    seen.add(num);
  }
  // If we finish looping without finding duplicates, return false.
  return false;
}

const nums: number[] = [1, 2, 3];
console.log(duplicate(nums));
