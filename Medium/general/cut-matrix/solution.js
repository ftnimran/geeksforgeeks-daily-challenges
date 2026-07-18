class Solution {
  findWays(matrix, k) {
    const MOD = 1e9 + 7;
    const n = matrix.length;
    const m = matrix[0].length;
    const stride = m + 1;

    const apples = new Int32Array((n + 1) * stride);
    for (let i = n - 1; i >= 0; i--) {
      let rowSum = 0;
      for (let j = m - 1; j >= 0; j--) {
        rowSum += matrix[i][j];
        apples[i * stride + j] = rowSum + apples[(i + 1) * stride + j];
      }
    }

    let dp = new Int32Array((n + 1) * stride);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (apples[i * stride + j] > 0) dp[i * stride + j] = 1;
      }
    }

    const nextRow = new Int32Array(n * m);
    const nextCol = new Int32Array(n * m);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        const currentApples = apples[i * stride + j];

        let nr = i + 1;
        while (nr < n && apples[nr * stride + j] === currentApples) nr++;
        nextRow[i * m + j] = nr;

        let nc = j + 1;
        while (nc < m && apples[i * stride + nc] === currentApples) nc++;
        nextCol[i * m + j] = nc;
      }
    }

    let colSum = new Int32Array((n + 1) * stride);
    let rowSum = new Int32Array((n + 1) * stride);
    let newDp = new Int32Array((n + 1) * stride);

    for (let step = 2; step <= k; step++) {
      for (let j = 0; j < m; j++) {
        let sum = 0;
        for (let i = n - 1; i >= 0; i--) {
          sum = (sum + dp[i * stride + j]) % MOD;
          colSum[i * stride + j] = sum;
        }
      }

      for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = m - 1; j >= 0; j--) {
          sum = (sum + dp[i * stride + j]) % MOD;
          rowSum[i * stride + j] = sum;
        }
      }

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          const idx = i * stride + j;

          if (apples[idx] === 0) {
            newDp[idx] = 0;
            continue;
          }

          let ans = 0;

          const nr = nextRow[i * m + j];
          if (nr < n) ans = (ans + colSum[nr * stride + j]) % MOD;

          const nc = nextCol[i * m + j];
          if (nc < m) ans = (ans + rowSum[i * stride + nc]) % MOD;

          newDp[idx] = ans;
        }
      }

      let temp = dp;
      dp = newDp;
      newDp = temp;
    }

    return dp[0];
  }
}
