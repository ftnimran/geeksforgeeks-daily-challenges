/**
 * @param {number} n
 * @param {number} sum
 * @return {number}
 */

class Solution {
  countWays(n, sum) {
    if (sum > 9 * n) return -1;

    const dp = Array.from({ length: n + 1 }, () => Array(sum + 1).fill(-1));

    const solve = (digits, remSum) => {
      if (remSum < 0) return 0;

      if (digits === 0) return remSum === 0 ? 1 : 0;

      if (dp[digits][remSum] !== -1) return dp[digits][remSum];

      let ans = 0;

      const limit = Math.min(9, remSum);

      for (let d = 0; d <= limit; d++) {
        ans += solve(digits - 1, remSum - d);
      }

      return (dp[digits][remSum] = ans);
    };

    let ans = 0;

    const limit = Math.min(9, sum);

    for (let first = 1; first <= limit; first++) {
      ans += solve(n - 1, sum - first);
    }

    return ans === 0 ? -1 : ans;
  }
}
