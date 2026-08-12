/**
 * @param {number[][]} grid
 * @return {number[]}
 */

class Solution {
  findWays(grid) {
    const n = grid.length;
    const MOD = 1000000007;

    const paths = new Array(n).fill(0);
    const best = new Array(n).fill(-Infinity);

    paths[0] = 1;
    best[0] = grid[0][0];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === 0 && j === 0) continue;

        let ways = 0;
        let maxAdventure = -Infinity;

        if (i > 0) {
          const top = grid[i - 1][j];

          if (top === 2 || top === 3) {
            ways = (ways + paths[j]) % MOD;

            if (best[j] !== -Infinity) {
              maxAdventure = Math.max(maxAdventure, best[j] + grid[i][j]);
            }
          }
        }

        if (j > 0) {
          const left = grid[i][j - 1];

          if (left === 1 || left === 3) {
            ways = (ways + paths[j - 1]) % MOD;

            if (best[j - 1] !== -Infinity) {
              maxAdventure = Math.max(maxAdventure, best[j - 1] + grid[i][j]);
            }
          }
        }

        paths[j] = ways;
        best[j] = maxAdventure;
      }
    }

    return paths[n - 1] === 0 ? [0, 0] : [paths[n - 1], best[n - 1]];
  }
}
