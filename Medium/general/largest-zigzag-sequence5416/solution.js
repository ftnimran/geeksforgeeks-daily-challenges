/**
 * @param {number[][]} mat
 * @return {number}
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */

class Solution {
  zigzagSequence(mat) {
    const n = mat.length;

    const memo = Array.from({ length: n }, () => new Array(n).fill(-1));

    const solve = (row, col) => {
      if (row === n - 1) {
        return mat[row][col];
      }

      if (memo[row][col] !== -1) {
        return memo[row][col];
      }

      let best = 0;

      for (let nextCol = 0; nextCol < n; nextCol++) {
        if (nextCol !== col) {
          best = Math.max(best, solve(row + 1, nextCol));
        }
      }

      return (memo[row][col] = mat[row][col] + best);
    };

    let answer = 0;

    for (let col = 0; col < n; col++) {
      answer = Math.max(answer, solve(0, col));
    }

    return answer;
  }
}
