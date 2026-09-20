/**
 * @param {string[][]} mat
 * @return s {number}
 */

class Solution {
  largestSubsquare(mat) {
    const n = mat.length;
    const topMemo = Array.from({ length: n }, () => new Int16Array(n).fill(-1));
    const leftMemo = Array.from({ length: n }, () =>
      new Int16Array(n).fill(-1),
    );

    const getTop = (i, j) => {
      if (i < 0 || mat[i][j] === "O") return 0;
      if (topMemo[i][j] !== -1) return topMemo[i][j];
      return (topMemo[i][j] = 1 + getTop(i - 1, j));
    };

    const getLeft = (i, j) => {
      if (j < 0 || mat[i][j] === "O") return 0;
      if (leftMemo[i][j] !== -1) return leftMemo[i][j];
      return (leftMemo[i][j] = 1 + getLeft(i, j - 1));
    };

    let maxSq = 0;

    for (let i = n - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        let minSide = Math.min(getTop(i, j), getLeft(i, j));

        while (minSide > maxSq) {
          if (
            getTop(i, j - minSide + 1) >= minSide &&
            getLeft(i - minSide + 1, j) >= minSide
          ) {
            maxSq = minSide;
            break;
          }
          minSide--;
        }
      }
    }

    return maxSq;
  }
}
