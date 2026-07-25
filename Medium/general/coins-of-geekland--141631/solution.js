class Solution {
  maximumSum(mat, k) {
    const n = mat.length;

    const prefix = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        prefix[i][j] =
          mat[i - 1][j - 1] +
          prefix[i - 1][j] +
          prefix[i][j - 1] -
          prefix[i - 1][j - 1];
      }
    }

    let ans = -Infinity;

    for (let i = k; i <= n; i++) {
      for (let j = k; j <= n; j++) {
        const sum =
          prefix[i][j] -
          prefix[i - k][j] -
          prefix[i][j - k] +
          prefix[i - k][j - k];

        ans = Math.max(ans, sum);
      }
    }

    return ans;
  }
}
