function topKFrequentElement(arr: number[], k: number): number[] {
    const map = new Map<number, number>();

    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const buckets: number[][] = new Array(arr.length + 1);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    for (const [num, freq] of map.entries()) {
        buckets[freq].push(num);
    }

    const result: number[] = [];

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            for (const num of buckets[i]) {
                if (result.length < k) {
                    result.push(num);
                } else {
                    break;
                }
            }
        }
    }
    return result;
}
const arr = [1, 2, 2, 2, 3, 4,4,4];
const arr2 = [2, 3, 4, 5];

console.log(topKFrequentElement(arr, 0));
console.log(topKFrequentElement(arr2, 1));
