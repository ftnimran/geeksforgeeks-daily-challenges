/**
 * @param {number[]} arr
 * @return {number[][]}
 */
class Solution {
  levelSort(arr) {
    const ans = [];

    let idx = 0;
    let levelSize = 1;
    const n = arr.length;

    while (idx < n) {
      const end = Math.min(idx + levelSize, n);

      const level = arr.slice(idx, end);
      level.sort((a, b) => a - b);

      ans.push(level);

      idx = end;
      levelSize <<= 1;
    }

    return ans;
  }
}
