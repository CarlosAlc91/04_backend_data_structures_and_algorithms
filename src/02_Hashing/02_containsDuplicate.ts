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

//1. Function creation
const containsDuplicate = (arr: number[]): boolean => {
  //2. we create our map to save each number we already passed
  const map = new Set<number>();

  //3. we iterate each value with a for...of loop
  for (const num of arr) {
    //4. once we iterate the number we ask our map
    if (map.has(num)) {
      return true;
    }

    //5. if we haven't add it to our map
    map.add(num);
  }

  return false;
};

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
