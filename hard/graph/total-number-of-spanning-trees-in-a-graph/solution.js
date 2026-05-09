/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
class Solution {
  determinant(mat, n) {
    let det = 1;

    for (let i = 0; i < n; i++) {
      let pivot = i;

      while (pivot < n && mat[pivot][i] === 0) {
        pivot++;
      }

      if (pivot === n) return 0;

      if (pivot !== i) {
        [mat[i], mat[pivot]] = [mat[pivot], mat[i]];
        det *= -1;
      }

      det *= mat[i][i];

      for (let j = i + 1; j < n; j++) {
        let factor = mat[j][i] / mat[i][i];

        for (let k = i; k < n; k++) {
          mat[j][k] -= factor * mat[i][k];
        }
      }
    }

    return Math.round(det);
  }

  countSpanTree(n, edges) {
    if (n === 1) return 1;

    let lap = Array.from({ length: n }, () => Array(n).fill(0));

    for (let [u, v] of edges) {
      lap[u][u]++;
      lap[v][v]++;

      lap[u][v]--;
      lap[v][u]--;
    }

    let minor = [];

    for (let i = 1; i < n; i++) {
      let row = [];

      for (let j = 1; j < n; j++) {
        row.push(lap[i][j]);
      }

      minor.push(row);
    }

    return this.determinant(minor, n - 1);
  }
}
