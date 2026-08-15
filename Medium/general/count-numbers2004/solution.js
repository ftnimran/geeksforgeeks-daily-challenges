/*
 * @param {number} n
 * @param {number} d
 * @return {number}
 */

class Solution {
  countWithout(n, d) {
    if (n <= 0) return 0;

    const digits = String(n).split("").map(Number);
    const memo = new Map();

    const dfs = (pos, tight, started) => {
      if (pos === digits.length) {
        return started ? 1 : 0;
      }

      const key = `${pos},${tight},${started}`;

      if (memo.has(key)) {
        return memo.get(key);
      }

      const limit = tight ? digits[pos] : 9;
      let count = 0;

      for (let digit = 0; digit <= limit; digit++) {
        const nextTight = tight && digit === digits[pos];

        if (!started && digit === 0) {
          count += dfs(pos + 1, nextTight, false);
          continue;
        }

        if (digit === d) continue;

        count += dfs(pos + 1, nextTight, true);
      }

      memo.set(key, count);
      return count;
    };

    return dfs(0, true, false);
  }
}
