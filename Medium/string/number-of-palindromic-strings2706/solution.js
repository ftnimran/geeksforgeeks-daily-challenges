/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

class Solution {
  palindromicStrings(n, k) {
    const MOD = 1000000007;

    const solve = (r, perm) => {
      if (2 * r - 1 > n) return 0;

      const current = (perm * (k - r + 1)) % MOD;

      let count = current;

      if (2 * r <= n) {
        count = (count + current) % MOD;
      }

      return (count + solve(r + 1, current)) % MOD;
    };

    return solve(1, 1);
  }
}
