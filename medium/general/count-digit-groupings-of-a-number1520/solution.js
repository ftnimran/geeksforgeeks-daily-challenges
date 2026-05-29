class Solution {
  solve(i, prev, s, dp) {
    if (i === s.length) return 1;

    if (dp[i][prev] !== -1) return dp[i][prev];

    let ans = 0;
    let sum = 0;

    for (let j = i; j < s.length; j++) {
      sum += s.charCodeAt(j) - 48;

      if (sum >= prev) {
        ans += this.solve(j + 1, sum, s, dp);
      }
    }

    return (dp[i][prev] = ans);
  }

  validGroups(s) {
    const dp = Array.from({ length: s.length + 1 }, () => Array(901).fill(-1));

    return this.solve(0, 0, s, dp);
  }
}
