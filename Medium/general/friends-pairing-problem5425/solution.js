/**
 * @param {number} n
 * @return {number}
 */

class Solution {
  countFriendsPairings(n) {
    const memo = new Array(n + 1).fill(-1);

    const solve = (n) => {
      if (n <= 2) return n;

      if (memo[n] !== -1) {
        return memo[n];
      }

      memo[n] = solve(n - 1) + (n - 1) * solve(n - 2);

      return memo[n];
    };

    return solve(n);
  }
}
