/**
 * @param {number[][]} mat
 * @return {number}
 */
class Solution {
  minCost(mat) {
    const n = mat.length;
    const dp = Array.from({ length: n }, () => [-1, -1, -1]);

    const solve = (row, prevChoice) => {
      if (row === n) return 0;

      if (prevChoice !== -1 && dp[row][prevChoice] !== -1) {
        return dp[row][prevChoice];
      }

      let ans = Infinity;

      for (let choice = 0; choice < 3; choice++) {
        if (choice === prevChoice) continue;

        ans = Math.min(ans, mat[row][choice] + solve(row + 1, choice));
      }

      if (prevChoice !== -1) {
        dp[row][prevChoice] = ans;
      }

      return ans;
    };

    return solve(0, -1);
  }
}
