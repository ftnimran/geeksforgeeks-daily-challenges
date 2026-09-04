/**
 * @param {number[]} arr
 * @param {number} m
 * @returns {number}
 */
class Solution {
  maxFruits(arr, m) {
    const n = arr.length;
    const prefix = new Array(2 * n + 1).fill(0);

    for (let i = 0; i < 2 * n; i++) {
      prefix[i + 1] = prefix[i] + arr[i % n];
    }

    const solve = (left, right) => {
      if (left === right) {
        return prefix[left + m] - prefix[left];
      }

      const mid = (left + right) >> 1;

      const a = solve(left, mid);
      const b = solve(mid + 1, right);

      return Math.max(a, b);
    };

    return solve(0, n - 1);
  }
}
