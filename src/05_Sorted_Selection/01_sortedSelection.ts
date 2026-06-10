/**
 * Selection Sort algorithm implementation.
 * * * ```ts
 * const result = selectionSort([5, 3, 6, 2, 10]); // Returns [2, 3, 5, 6, 10]
 * ```
 * * @param arr - An unsorted array of numbers.
 * @param result - A new sorted array from smallest to largest.
 * @complexity Time: O(n²) | Space: O(n)
 */

// 1. Helper function to find the index of the smallest element in an array.
function findSmallestIndex(arr: number[]): number {
  // 2. Stores the smallest value.
  let smallest = arr[0];
  // 3. Stores the index of the smallest value.
  let smallestIndex = 0;

  // 4. Iterate through the array starting from the second element (index 1).
  for (let i = 1; i < arr.length; i++) {
    // 5. Access the current element in the loop.
    const current = arr[i];

    // 6. Check if current element is smaller than our current record.
    if (current !== undefined && current < (smallest as number)) {
      // 7. Update the smallest value found so far.
      smallest = current;
      // 8. Update the index of the smallest value.
      smallestIndex = i;
    }
  }
  // 9. Return the final index of the smallest item found.
  return smallestIndex;
}

// 10. Main function to perform Selection Sort.
export function selectionSort(arr: number[]): number[] {
  // 11. Create an empty array to store the sorted elements.
  const sorted: number[] = [];

  // 12. Create a copy of the input array to avoid changing the original data.
  const temp = [...arr];

  /**
   * 13. Loop while there are still elements left in the temporary array.
   */
  while (temp.length > 0) {
    // 14. Find the index of the smallest element in the current 'temp' array.
    const smallestIdx = findSmallestIndex(temp);

    // 15. Remove the smallest element from 'temp' using .splice().
    const [item] = temp.splice(smallestIdx, 1);

    // 16. Push the found element into our 'sorted' results.
    if (item !== undefined) {
      sorted.push(item);
    }
  }

  // 17. Return the final sorted array.
  return sorted;
}

// TESTING THE ALGORITHM:
const unsortedList: number[] = [5, 3, 6, 2, 10];
console.log("Original List:", unsortedList);
// 18. Will show the sorted array.
console.log("Sorted List:", selectionSort(unsortedList));