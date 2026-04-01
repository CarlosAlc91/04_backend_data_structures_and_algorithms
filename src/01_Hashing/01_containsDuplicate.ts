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

//[1,2,3,4,5,5] true
//[1,2,3,4,5] false

function containsDuplicate(arr: number[]): boolean {
  const seen = new Set<number>();

  for (const num of arr) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

const arr = [1, 2, 3, 4, 5, 5]; //true
const arr2 = [1, 2, 3, 4, 5]; //false

console.log(`Tienes duplicados`, containsDuplicate(arr));
console.log(`Tienes duplicados`, containsDuplicate(arr2));
