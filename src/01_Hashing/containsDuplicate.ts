/**
 * Contains Duplicate - Hash Set (Explicit Iteration)
 *
 * Given an integer array nums, return true if any value appears more than once,
 * otherwise return false.
 *
 * Time Complexity: O(n) - we traverse the array once
 * Space Complexity: O(n) - in worst case, we store all unique elements
 *
 * @param nums - Array of integers
 * @returns true if duplicate exists, false otherwise
 */

/**
 * Contains Duplicate - Hash Set (One-liner)
 *
 * Given an integer array nums, return true if any value appears more than once,
 * otherwise return false.
 *
 * Time Complexity: O(n) - creating the Set requires iterating through the array
 * Space Complexity: O(n) - the Set stores all unique elements
 *
 * @param nums - Array of integers
 * @returns true if duplicate exists, false otherwise
 */

function containsDuplicate(nums: number[]): boolean {
  // LINE 1: Create a Set to store numbers we've already seen
  // Set is a built-in JavaScript data structure that stores unique values
  // It provides O(1) average time complexity for .has() and .add() operations
  // We specify <number> for TypeScript type safety
  const seen = new Set<number>();

  // LINE 2: Iterate through each number in the array
  // Using for...of loop gives us direct access to each value
  // We don't need the index for this algorithm
  for (const num of nums) {
    // LINE 3: Check if the current number is already in the Set
    // .has() returns true if the value exists, false otherwise
    // This operation is O(1) on average because Set uses a hash table internally
    if (seen.has(num)) {
      // LINE 4: If we find a number that's already in the Set
      // That means we've seen this value before → duplicate exists
      // Return true immediately, no need to check remaining elements
      // Early exit improves average-case performance
      return true;
    }

    // LINE 5: If the number is not in the Set yet
    // Add it to the Set so we can detect it if it appears again
    // .add() is also O(1) on average
    // Now future iterations can detect this number as a duplicate
    seen.add(num);
  }

  // LINE 6: If we finish the loop without finding any duplicates
  // That means all elements in the array are unique
  // Return false to indicate no duplicates were found
  return false;
}

// Test cases
const test1 = [1, 2, 3, 3];
const test2 = [1, 2, 3, 4];

console.log(containsDuplicate(test1)); // true
console.log(containsDuplicate(test2)); // false

/*
function containsDuplicateOptimized(nums: number[]): boolean {
  // LINE 1: Create a new Set from the array
  // new Set(nums) takes the array and creates a Set containing only unique values
  // All duplicates are automatically removed during Set construction
  // Example: [1, 2, 3, 3] becomes Set {1, 2, 3}
  const uniqueSet = new Set(nums);

  // LINE 2: Compare the size of the Set with the original array length
  // .size returns the number of unique elements in the Set
  // .length returns the number of elements in the original array
  // If they are different, it means there were duplicates in the original array
  // Because duplicates were removed when creating the Set
  // Example: Set size = 3, array length = 4 → 3 !== 4 → true (duplicates exist)
  // Example: Set size = 4, array length = 4 → 4 !== 4 → false (no duplicates)
  return uniqueSet.size !== nums.length;
}

// Alternative one-liner (without intermediate variable)
// This version does the same thing but in a single line
// It's more concise but slightly less readable for beginners
function containsDuplicateOneLiner(nums: number[]): boolean {
  // Directly compare Set size with array length without storing in a variable
  // This is functionally identical to the version above
  return new Set(nums).size !== nums.length;
}

// Test cases
const test1 = [1, 2, 3, 3];
const test2 = [1, 2, 3, 4];

console.log(containsDuplicateOptimized(test1)); // true
console.log(containsDuplicateOptimized(test2)); // false
*/
