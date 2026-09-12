/*
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
class Solution {
  maxProduct(arr, k) {
    const n = arr.length;
    const memo = new Map();

    const solve = (i, left) => {
      if (left === 0) return [1, 1];
      if (n - i < left) return [-Infinity, Infinity];

      const key = i + "," + left;
      if (memo.has(key)) return memo.get(key);

      const [takeMax, takeMin] = solve(i + 1, left - 1);
      const [skipMax, skipMin] = solve(i + 1, left);

      const x = arr[i];

      const p1 = x * takeMax;
      const p2 = x * takeMin;

      const max = Math.max(skipMax, p1, p2);
      const min = Math.min(skipMin, p1, p2);

      const result = [max, min];
      memo.set(key, result);

      return result;
    };

    return solve(0, k)[0];
  }
}
