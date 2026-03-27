function binarySearchTwo(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid: number = left + ((right - left) >> 2);
    const value = nums[mid];

    if (value === undefined) {
      break;
    }

    if (value === target) {
      return mid;
    }

    value > target ? (right = mid - 1) : (left = mid + 1);
  }

  return -1;
}

const myList: number[] = [1, 2, 3, 4, 5, 6];

console.log("Index of 3:", binarySearchTwo(myList, 3));
