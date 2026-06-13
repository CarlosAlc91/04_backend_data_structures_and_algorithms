/**
 * 219. Contains Duplicate II
 * Given an integer array nums and an integer k, return true
 * if there are two distinct indices i and j in the array
 * such that nums[i] == nums[j] and abs(i - j) <= k.
 *
 */

//1. Function creation.
const containsDuplicate = (nums: number[], k: number): boolean => {
  //2. Initialize an empty Has Map to store <key, value>
  const map = new Map<number, number>();

  //3. Classic for loop to iterate the array from index 0 to the end of the array.
  for (let i = 0; i < nums.length; i++) {
    //4. Extract current number at index "i"
    const num = nums[i]!;

    //5. Check if the current number has already been seen in aprevious iteration
    if (map.has(num)) {
      //6. Retrieve the past index where this number was last seen
      const pastIndex = map.get(num)!;

      //7. Calulcate if the absolute difference between indices is less than or equal to k
      if (i - pastIndex <= k) {
        //8. Condition met
        return true;
      }
    }

    //9. Update or insert the current number with its latest index in the map
    map.set(num, i);
  }

  //10. If the loop finishes without finding any valid pair, return false
  return false;
};

const nums = [1, 2, 3, 1];
const k = 3;

const nums2 = [1, 0, 1, 1];
const k2 = 1;
const nums3 = [1, 2, 3, 1, 2, 3];
const k3 = 2;

console.log(containsDuplicate(nums, k));
console.log(containsDuplicate(nums2, k2));
console.log(containsDuplicate(nums3, k3));
