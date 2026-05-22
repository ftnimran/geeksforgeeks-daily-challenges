/**
 * @param {number[][]} grid
 * @returns {number}
 */

class Solution {
  cntOnes(grid) {
    const n = grid.length;
    const m = grid[0].length;

    const dir = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    const dfs = (r, c) => {
      grid[r][c] = 0;

      for (let [dr, dc] of dir) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr >= 0 && nc >= 0 && nr < n && nc < m && grid[nr][nc] === 1) {
          dfs(nr, nc);
        }
      }
    };

    for (let i = 0; i < n; i++) {
      if (grid[i][0] === 1) dfs(i, 0);

      if (grid[i][m - 1] === 1) dfs(i, m - 1);
    }

    for (let j = 0; j < m; j++) {
      if (grid[0][j] === 1) dfs(0, j);

      if (grid[n - 1][j] === 1) dfs(n - 1, j);
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 1) ans++;
      }
    }

    return ans;
  }
}
