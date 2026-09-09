/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
  findMax(n) {
    const s = String(n);

    const digitSum = (x) => {
      if (x === 0) return 0;
      return (x % 10) + digitSum(Math.floor(x / 10));
    };

    const solve = (i, best) => {
      if (i === s.length) return best;

      const prefix = Number(s.slice(0, i + 1)) - 1;

      if (prefix >= 0) {
        const candidate = Number(String(prefix) + "9".repeat(s.length - i - 1));
        const sum = digitSum(candidate);

        if (
          sum > digitSum(best) ||
          (sum === digitSum(best) && candidate > best)
        ) {
          best = candidate;
        }
      }

      return solve(i + 1, best);
    };

    return solve(0, n);
  }
}
