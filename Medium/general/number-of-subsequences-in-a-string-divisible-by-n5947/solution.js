class Solution {
  countSubsequences(s, n) {
    const MOD = 1000000007;
    const dp = new Uint32Array(n);

    for (let i = 0; i < s.length; i++) {
      const d = s.charCodeAt(i) - 48;
      const next = new Uint32Array(n);

      for (let r = 0; r < n; r++) {
        if (dp[r] === 0) continue;

        let nr = (r * 10 + d) % n;

        let x = next[r] + dp[r];
        if (x >= MOD) x -= MOD;
        next[r] = x;

        x = next[nr] + dp[r];
        if (x >= MOD) x -= MOD;
        next[nr] = x;
      }

      const r = d % n;
      let x = next[r] + 1;
      if (x >= MOD) x -= MOD;
      next[r] = x;

      dp.set(next);
    }

    return dp[0];
  }
}
