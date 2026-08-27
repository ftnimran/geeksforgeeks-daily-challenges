/*
 * @param {number[][]} mat
 * @return {number}
 */
class Solution {
  maxArea(mat) {
    const n = mat.length;
    if (n === 0) return 0;
    const m = mat[0].length;

    const solve = (row, prevHist) => {
      if (row === n) return 0;

      let currHist = new Int32Array(m);
      let count = new Int32Array(n + 1);

      for (let j = 0; j < m; j++) {
        currHist[j] = mat[row][j] === 1 ? prevHist[j] + 1 : 0;
        count[currHist[j]]++;
      }

      let maxRowArea = 0;
      let width = 0;
      for (let h = row + 1; h > 0; h--) {
        if (count[h] > 0) {
          width += count[h];
          let area = h * width;
          if (area > maxRowArea) maxRowArea = area;
        }
      }

      return Math.max(maxRowArea, solve(row + 1, currHist));
    };

    return solve(0, new Int32Array(m));
  }
}
