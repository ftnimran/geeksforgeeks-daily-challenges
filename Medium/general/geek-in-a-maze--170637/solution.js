/*
 * @param {number} r
 * @param {number} c
 * @param {number} u
 * @param {number} d
 * @param {character[][]} mat
 * @return {number}
 */

class Solution {
  numberOfCells(r, c, u, d, mat) {
    const n = mat.length;
    const m = mat[0].length;

    if (mat[r][c] === "#") return 0;

    const N = n * m;
    const INF = 1 << 30;

    const best = new Int32Array(N);
    best.fill(INF);

    const q = new Int32Array(N + 5);
    let head = 0;
    let tail = 0;

    const start = r * m + c;
    best[start] = 0;
    q[tail++] = start;

    while (head < tail) {
      const id = q[head++];
      const x = (id / m) | 0;
      const y = id - x * m;

      const upUsed = best[id];

      const downUsed = upUsed + x - r;

      if (upUsed > u || downUsed < 0 || downUsed > d) {
        continue;
      }

      if (x > 0 && mat[x - 1][y] !== "#") {
        const nid = id - m;
        const nextUp = upUsed + 1;

        if (nextUp <= u && nextUp < best[nid]) {
          best[nid] = nextUp;
          q[tail++] = nid;
        }
      }

      if (x + 1 < n && mat[x + 1][y] !== "#") {
        const nid = id + m;
        const nextUp = upUsed;

        if (nextUp + (x + 1 - r) <= d && nextUp < best[nid]) {
          best[nid] = nextUp;
          q[tail++] = nid;
        }
      }

      if (y > 0 && mat[x][y - 1] !== "#") {
        const nid = id - 1;

        if (upUsed < best[nid]) {
          best[nid] = upUsed;
          q[tail++] = nid;
        }
      }

      if (y + 1 < m && mat[x][y + 1] !== "#") {
        const nid = id + 1;

        if (upUsed < best[nid]) {
          best[nid] = upUsed;
          q[tail++] = nid;
        }
      }
    }

    let ans = 0;

    for (let i = 0; i < N; i++) {
      if (best[i] !== INF) ans++;
    }

    return ans;
  }
}
