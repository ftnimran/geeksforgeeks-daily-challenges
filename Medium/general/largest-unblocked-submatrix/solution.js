/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} arr
 * @returns {number}
 */
class Solution {
  largestArea(n, m, arr) {
    const rows = [0, n + 1];
    const cols = [0, m + 1];

    for (const [r, c] of arr) {
      rows.push(r);
      cols.push(c);
    }

    rows.sort((a, b) => a - b);
    cols.sort((a, b) => a - b);

    const solve = (list, i, best) => {
      if (i === list.length) return best;
      return solve(list, i + 1, Math.max(best, list[i] - list[i - 1] - 1));
    };

    const maxRow = solve(rows, 1, 0);
    const maxCol = solve(cols, 1, 0);

    return maxRow * maxCol;
  }
}
