class Solution {
  solve(n, memo) {
    if (n <= 6) return n;

    if (memo[n] !== -1) return memo[n];

    let ans = n;

    for (let i = 1; i <= n - 3; i++) {
      ans = Math.max(ans, this.solve(i, memo) * (n - i - 1));
    }

    return (memo[n] = ans);
  }

  optimalKeys(n) {
    const memo = new Array(n + 1).fill(-1);

    return this.solve(n, memo);
  }
}
