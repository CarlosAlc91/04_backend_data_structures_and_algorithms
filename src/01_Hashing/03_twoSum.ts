/**
 *
 * * Two Sum - Hash Map (One Pass)
 * * Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
 *
 * * You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
 *
 * * Return the answer with the smaller index first.
 *
 * * Example 1:
 * * Input: nums = [3,4,5,6], target = 7
 * * return [0, 1].
 *
 * * Example 2:
 * * Input: nums = [4,5,6], target = 10
 * * Output: [0,2]
 * * Example 3:
 *
 * @param nums - Array of integers
 * @param target - Target sum
 * @returns Array with the two indices [i, j] where i < j
 *
 * Time Complexity: O(n) - we traverse the array once
 * Space Complexity: O(n) - in worst case we store all numbers in the Map
 *
 */

function twoSum(arr: number[], target: number): number[] {
  // Step 1: Create an empty Map to store numbers we've already seen
  // Key: the number value
  // Value: the index where that number appears
  // Map is used instead of an object because keys can be negative numbers
  const map = new Map<number, number>();

  // Step 2: Traverse the array element by element
  // i is the current index (0, 1, 2, ...)
  for (let i = 0; i < arr.length; i++) {
    // Step 3: Calculate the complement
    // The complement is the number we need to find to complete the sum
    // If nums[i] + X = target, then X = target - nums[i]
    // The ! (non-null assertion) tells TypeScript:
    // "Trust me, nums[i] exists because i is within the array bounds"
    const complement = target - arr[i]!;

    // Step 4: Check if the complement already exists in the Map
    // map.has(complement) asks: "Did we see this number before?"
    if (map.has(complement)) {
      // Step 5: We found the solution!
      // map.get(complement) gives us the index where the complement appeared
      // That index is always smaller than i because we stored it in previous iterations
      // Return [complement's index, current index]
      return [map.get(complement)!, i];
    }

    // Step 6: If we didn't find the complement, store the current number in the Map
    // This allows future numbers to find this one as their complement
    // Store the number value as key and its index as value
    map.set(arr[i]!, i);
  }

  // Step 7: According to the problem statement, a solution always exists
  // This return is never reached, but TypeScript requires a return value
  return [];
}

const arr = [3, 4, 5, 6];
const target = 13;
console.log(`The sum of ${target} is given by:`, twoSum(arr, target));
