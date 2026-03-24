/**
 * Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

Example 2:

Input: nums = [4,5,6], target = 10

Output: [0,2]
Example 3:

Input: nums = [5,5], target = 10

Output: [0,1]
Constraints:

2 <= nums.length <= 1000
-10,000,000 <= nums[i] <= 10,000,000
-10,000,000 <= target <= 10,000,000
Only one valid answer exists.

 * 
 * 
 */

//function creation, we'll receive an array and a target, an returning an array
function sumOfTwo(nums: number[], target: number): number[] {
  //for loop that the index will start at the 0 position, the index will be iterating
  for (let i = 0; i < nums.length; i++) {
    //second for loop starting at the position one and same as first for iterates
    for (let j = i + 1; j < nums.length; j++) {
      //conditional if, if adding index i plus index j are equual to my target
      if (nums[i]! + nums[j]! === target) {
        //will return both index
        return [i, j];
      }
    }
  }
  

  return [];
}

const nums: number[] = [3, 4, 5, 6];
console.log(sumOfTwo(nums, 7));
