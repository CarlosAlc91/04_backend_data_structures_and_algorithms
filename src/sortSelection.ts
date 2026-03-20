/**
 * Selection Sort Algorithm:
 * Finds the smallest element in an array and moves it to a new sorted array.
 * * * ```ts
 * const sorted = selectionSort([5, 3, 6, 2, 10]); // [2, 3, 5, 6, 10]
 * ```
 * * @param arr - The unsorted array of numbers.
 * @returns A new array sorted from smallest to largest.
 * @complexity Time: O(n²) | Space: O(n)
 */

// Helper function to find the index of the smallest element
function findSmallestIndex(arr: number[]): number {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    // We use a non-null assertion or check because of your strict tsconfig
    const current = arr[i];
    if (current !== undefined && current < (smallest as number)) {
      smallest = current;
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

// Main Selection Sort function
export function selectionSort(arr: number[]): number[] {
  const newArr: number[] = [];
  const tempArr = [...arr]; // Create a copy to avoid mutating the original array

  const length = tempArr.length;
  for (let i = 0; i < length; i++) {
    // 1. Find the smallest element in the remaining array
    const smallestIndex = findSmallestIndex(tempArr);

    // 2. Remove it from the original and push it to the new array
    const [smallestElement] = tempArr.splice(smallestIndex, 1);

    if (smallestElement !== undefined) {
      newArr.push(smallestElement);
    }
  }

  return newArr;
}

// TESTING:
const unsortedList = [5, 3, 6, 2, 10];
console.log("Original List:", unsortedList);
console.log("Sorted List:", selectionSort(unsortedList));
