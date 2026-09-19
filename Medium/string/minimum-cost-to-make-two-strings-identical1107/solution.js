/**
 * @param {string} s1
 * @param {string} s2
 * @param {number} costS1
 * @param {number} costS2
 * @returns {number}
 */

class Solution {
  findMinCost(s1, s2, costS1, costS2) {
    const n = s1.length;
    const m = s2.length;
    const memo = Array.from({ length: n + 1 }, () =>
      new Int32Array(m + 1).fill(-1),
    );

    const solve = (i, j) => {
      if (i === n) return (m - j) * costS2;
      if (j === m) return (n - i) * costS1;

      if (memo[i][j] !== -1) return memo[i][j];

      if (s1.charCodeAt(i) === s2.charCodeAt(j)) {
        return (memo[i][j] = solve(i + 1, j + 1));
      }

      return (memo[i][j] = Math.min(
        costS1 + solve(i + 1, j),
        costS2 + solve(i, j + 1),
      ));
    };

    return solve(0, 0);
  }
}
