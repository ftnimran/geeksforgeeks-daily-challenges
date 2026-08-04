/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
  countPairs(arr, k) {
    if (k <= 0) return 0;

    arr.sort((a, b) => a - b);

    let ans = 0;

    for (let i = 0; i < arr.length; i++) {
      let low = i + 1;
      let high = arr.length - 1;
      let idx = i;

      while (low <= high) {
        const mid = (low + high) >> 1;

        if (arr[mid] - arr[i] < k) {
          idx = mid;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      ans += idx - i;
    }

    return ans;
  }
}
