/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
  minCount(arr) {
    const n = arr.length;
    const S = 102;
    const memo = new Int16Array(n * S * S);
    memo.fill(-1);

    const solve = (i, inc, dec) => {
      if (i === n) return 0;

      const key = (i * S + inc) * S + dec;
      if (memo[key] !== -1) return memo[key];

      const x = arr[i];

      let best = solve(i + 1, inc, dec);

      if (x > inc) {
        best = Math.max(best, 1 + solve(i + 1, x, dec));
      }

      if (x < dec) {
        best = Math.max(best, 1 + solve(i + 1, inc, x));
      }

      return (memo[key] = best);
    };

    return n - solve(0, 0, 101);
  }
}
