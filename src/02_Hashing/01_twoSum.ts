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

//1. function creation
const twoSum = (arr: number[], target: number): number[] => {
  //2. Map creation to store both key(number) and value(index)
  const map = new Map<number, number>();

  //3. Array iteration, using a conventional for since we're iterating numbers and indices
  for (let i = 0; i < arr.length; i++) {
    //4. Once we iterate our arr, we need to find a sum complement
    const complement = target - arr[i]!;

    //5. if our map has the numbers
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    //6. if we hasn-t add it to our map
    map.set(arr[i]!, i);
  }

  //No solution found we return an empty array []
  return [];
};

const arr = [1, 2, 3, 4];
const arr2 = [1, 1, 2, 2, 3];

console.log(twoSum(arr, 7));
console.log(twoSum(arr, 17));
