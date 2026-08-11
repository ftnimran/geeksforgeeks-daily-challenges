/**
 * @param {number[][]} mat
 * @param {number[][]} queries
 * @param {number} k
 * @return {number[]}
 */
class Solution {
  largestSquare(mat, queries, k) {
    const n = mat.length;
    const m = mat[0].length;

    const prefix = Array.from({ length: n + 1 }, () => new Int32Array(m + 1));

    for (let i = 1; i <= n; i++) {
      let rowSum = 0;

      for (let j = 1; j <= m; j++) {
        rowSum += mat[i - 1][j - 1];

        prefix[i][j] = prefix[i - 1][j] + rowSum;
      }
    }

    const getSum = (r1, c1, r2, c2) => {
      return (
        prefix[r2 + 1][c2 + 1] -
        prefix[r1][c2 + 1] -
        prefix[r2 + 1][c1] +
        prefix[r1][c1]
      );
    };

    const ans = new Array(queries.length);

    for (let q = 0; q < queries.length; q++) {
      const r = queries[q][0];
      const c = queries[q][1];

      const maxRadius = Math.min(r, c, n - 1 - r, m - 1 - c);

      let low = 0;
      let high = maxRadius;
      let best = -1;

      while (low <= high) {
        const radius = (low + high) >> 1;

        const r1 = r - radius;
        const c1 = c - radius;
        const r2 = r + radius;
        const c2 = c + radius;

        const ones = getSum(r1, c1, r2, c2);

        if (ones <= k) {
          best = radius;
          low = radius + 1;
        } else {
          high = radius - 1;
        }
      }

      ans[q] = best === -1 ? -1 : 2 * best + 1;
    }

    return ans;
  }
}
