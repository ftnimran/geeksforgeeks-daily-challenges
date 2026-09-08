class Solution {
  searchWord(mat, word) {
    const n = mat.length,
      m = mat[0].length;
    const ans = [];
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

    const dfs = (x, y, k, dir) => {
      if (k === word.length) return true;

      const nx = x + dx[dir];
      const ny = y + dy[dir];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m || mat[nx][ny] !== word[k])
        return false;

      return dfs(nx, ny, k + 1, dir);
    };

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (mat[i][j] !== word[0]) continue;

        for (let d = 0; d < 8; d++) {
          if (dfs(i, j, 1, d)) {
            ans.push([i, j]);
            break;
          }
        }
      }
    }

    return ans;
  }
}
