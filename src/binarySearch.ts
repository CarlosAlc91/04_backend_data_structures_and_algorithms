/**
 * Binary search algorithm implementation.
 * * * ```ts
 * const result = binarySearch([1, 2, 3, 4, 5], 3); // Returns 2
 * ```
 * *
 * @param arr - A **sorted** array of numbers.
 * @param item - The number we are looking for.
 * @returns The index of the item, or null if not found.
 * @complexity Time: O(log n) | Space: O(1)
 */

//Function creation
function binarySearch(arr: number[], item: number): number | null {
  //low is the first index
  let low: number = 0;
  //high is the last index of the array
  let high: number = arr.length - 1;

  // 2. Loop while the search window hasn't collapsed (low doesn't cross high).
  while (low <= high) {
    /**
     * 3. Calculate the middle index (mid).
     * We use Math.floor to get an integer (indices cannot be decimals).
     * The formula (low + (high - low) / 2) is a safe way to avoid overflow.
     */
    const mid: number = Math.floor(low + (high - low) / 2);

    //4. Get the value located exactly at the middle index to chexk.
    const guess = arr[mid];

    // 5. Safety check for strict TypeScript (noUncheckedIndexedAccess).
    // If for some reason the index is undefined, we stop the loop.
    if (guess === undefined) {
      break;
    }

    // 6. THE BEST CASE: If the middle value matches exactly what we want.
    if (guess === item) {
      return mid; // Return the position (index) where it was found.
    }

    // 7. If the guess is GREATER than the item we are looking for...
    if (guess > item) {
      // ...the number must be in the LEFT half.
      // We move the 'high' boundary to one position before 'mid'.
      high = mid - 1;
      // 8. If the guess is SMALLER than the item...
    } else {
      // ...the number must be in the RIGHT half.
      // We move the 'low' boundary to one position after 'mid'.
      low = mid + 1;
    }
  }
  // 9. If the loop ends and the item was never found, return null.
  return null;
}
// TESTING THE ALGORITHM:
const myList: number[] = [1, 2, 3, 4, 5, 6];

console.log("Index of 3:", binarySearch(myList, 3));


