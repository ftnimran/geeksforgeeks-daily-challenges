/**
 * @param {number} n
 * @param {number[][]} mat
 * @returns {number[]}
 */

class Solution {
  diagView(mat) {
    let n = mat.length;
    let result = [];

    for (let d = 0; d <= 2 * (n - 1); d++) {
      for (let i = 0; i <= d; i++) {
        let j = d - i;

        if (i < n && j < n) {
          result.push(mat[i][j]);
        }
      }
    }

    return result;
  }
}
