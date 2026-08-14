/**
 * @param {number[]} arr
 * @param {number} s
 * @param {number} x
 * @returns {boolean}
 */

class Solution {
  isPossible(arr, s, x) {
    const sequence = [s];
    let total = s;

    for (let i = 0; i < arr.length; i++) {
      const current = total + arr[i];

      if (current > x) break;

      sequence.push(current);
      total += current;
    }

    const memo = new Map();

    const solve = (index, target) => {
      if (target === 0) return true;
      if (index < 0 || target < 0) return false;

      const key = index + "," + target;

      if (memo.has(key)) {
        return memo.get(key);
      }

      if (solve(index - 1, target)) {
        memo.set(key, true);
        return true;
      }

      const result = solve(index - 1, target - sequence[index]);

      memo.set(key, result);
      return result;
    };

    return solve(sequence.length - 1, x);
  }
}
