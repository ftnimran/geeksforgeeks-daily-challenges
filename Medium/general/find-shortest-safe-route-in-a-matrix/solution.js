/**
 * @param {number[][]} mat
 * @return {number}
 */
class Solution {
  shortestPath(mat) {
    const n = mat.length;
    const m = mat[0].length;
    const total = n * m;
    const q = new Int32Array(total);
    let front = 0,
      rear = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (mat[i][j] === 0) {
          if (i > 0 && mat[i - 1][j] === 1) mat[i - 1][j] = -1;
          if (i + 1 < n && mat[i + 1][j] === 1) mat[i + 1][j] = -1;
          if (j > 0 && mat[i][j - 1] === 1) mat[i][j - 1] = -1;
          if (j + 1 < m && mat[i][j + 1] === 1) mat[i][j + 1] = -1;
        }
      }
    }

    for (let i = 0; i < n; i++) {
      if (mat[i][0] === 1) {
        mat[i][0] = 2;
        q[rear++] = i * m;
      }
    }

    let steps = 1;

    while (front < rear) {
      const end = rear;

      while (front < end) {
        const pos = q[front++];
        const r = (pos / m) | 0;
        const c = pos - r * m;

        if (c === m - 1) return steps;

        if (r > 0 && mat[r - 1][c] === 1) {
          mat[r - 1][c] = 2;
          q[rear++] = pos - m;
        }

        if (r + 1 < n && mat[r + 1][c] === 1) {
          mat[r + 1][c] = 2;
          q[rear++] = pos + m;
        }

        if (c > 0 && mat[r][c - 1] === 1) {
          mat[r][c - 1] = 2;
          q[rear++] = pos - 1;
        }

        if (c + 1 < m && mat[r][c + 1] === 1) {
          mat[r][c + 1] = 2;
          q[rear++] = pos + 1;
        }
      }

      steps++;
    }

    return -1;
  }
}
