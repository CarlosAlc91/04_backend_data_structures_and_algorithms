/**
 * Top K Frequent Elements - Bucket Sort
 *
 * Given an integer array arr and an integer k, return the k most frequent elements.
 *
 * Time Complexity: O(n) - we traverse the array a constant number of times
 * Space Complexity: O(n) - we store frequencies and buckets
 *
 * @param arr - Array of integers
 * @param k - Number of most frequent elements to return
 * @returns Array of the k most frequent elements
 **/

//1. function creation
function topKFrequentElement(arr: number[], k: number): number[] {
  if (k === 0) return [];

  //2. Create a Map to store each number and how many times it appears Map<number, frequency>
  const map = new Map<number, number>();

  //3. Iterate through the array
  for (const num of arr) {
    //4. Increment the count for this number
    //(num, (map.get(num) || 0)  ===> returns current count or 0 if not exists
    //+ 1 ===> stores it back
    map.set(num, (map.get(num) || 0) + 1);
  }

  //5. Bucket creation, the maximun frequency a number can have is arr.length
  //we create an array where index represents frequency
  //each bucket will store numbers that appear that many times
  const buckets: number[][] = new Array(arr.length + 1);

  //6. Initialize each bucket as an empy array
  for (let i = 0; i < buckets.length; i++) {
    //7. [0] = [], buckets[1] = [],...., buckets[8] = [8]
    buckets[i] = [];
  }

  //8. Iterate through our frequency Map
  //For each [number, frequency], place the number in bucket at index = frequency
  for (const [num, freq] of map.entries()) {
    //9. Add num to the array wich is in freq position from buckets array
    buckets[freq]!.push(num);
  }

  //10. collect top k elements from highest frequencies
  const result: number[] = [];

  //11. start from the highest frequency (end of buckets array)
  //continue until we have collected k elements
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    //12. if this bucket has number, add the to result
    if (buckets[i]!.length > 0) {
      //13. Add each number from this bucket
      for (const num of buckets[i]!) {
        //14. stop if we already have k elements
        if (result.length < k) {
          //15. Add num at the end of result array
          result.push(num);
          //16. break ===> goes out from the deepest bucle
        } else {
          break;
        }
      }
    }
  }
  //17. return k most frequent elements
  return result;
}
const arr = [1, 2, 2, 2, 3, 4, 4, 4];
const arr2 = [2, 3, 4, 5];

console.log(topKFrequentElement(arr, 0));
console.log(topKFrequentElement(arr2, 1));
