/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */

class Solution {
  maxPathSum(a, b) {
    const dfs = (i, j, sum1, sum2, ans) => {
      while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
          sum1 += a[i++];
        } else if (a[i] > b[j]) {
          sum2 += b[j++];
        } else {
          ans += Math.max(sum1, sum2) + a[i];
          sum1 = 0;
          sum2 = 0;
          return dfs(i + 1, j + 1, sum1, sum2, ans);
        }
      }

      while (i < a.length) sum1 += a[i++];
      while (j < b.length) sum2 += b[j++];

      return ans + Math.max(sum1, sum2);
    };

    return dfs(0, 0, 0, 0, 0);
  }
}
