/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
  maxSumWithK(arr, k) {
    const n = arr.length;

    const maxEnd = new Array(n);

    maxEnd[0] = arr[0];

    for (let i = 1; i < n; i++) {
      maxEnd[i] = maxEnd[i - 1] > 0 ? maxEnd[i - 1] + arr[i] : arr[i];
    }

    let windowSum = 0;

    for (let i = 0; i < k; i++) {
      windowSum += arr[i];
    }

    let ans = windowSum;

    for (let i = k; i < n; i++) {
      windowSum += arr[i] - arr[i - k];

      if (windowSum > ans) ans = windowSum;

      const candidate = windowSum + maxEnd[i - k];

      if (candidate > ans) ans = candidate;
    }

    return ans;
  }
}
