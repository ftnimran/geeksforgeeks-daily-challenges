class Solution {
  countCoordinates(mat) {
    const n = mat.length;
    const m = mat[0].length;

    const p = Array.from({ length: n }, () => Array(m).fill(false));
    const q = Array.from({ length: n }, () => Array(m).fill(false));

    const dir = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    const dfs = (r, c, vis) => {
      vis[r][c] = true;

      for (const [dr, dc] of dir) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr >= 0 &&
          nr < n &&
          nc >= 0 &&
          nc < m &&
          !vis[nr][nc] &&
          mat[nr][nc] >= mat[r][c]
        ) {
          dfs(nr, nc, vis);
        }
      }
    };

    for (let j = 0; j < m; j++) if (!p[0][j]) dfs(0, j, p);

    for (let i = 0; i < n; i++) if (!p[i][0]) dfs(i, 0, p);

    for (let j = 0; j < m; j++) if (!q[n - 1][j]) dfs(n - 1, j, q);

    for (let i = 0; i < n; i++) if (!q[i][m - 1]) dfs(i, m - 1, q);

    let ans = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (p[i][j] && q[i][j]) ans++;
      }
    }

    return ans;
  }
}
