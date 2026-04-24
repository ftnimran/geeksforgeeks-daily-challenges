/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
  visibleBuildings(arr) {
    function solve(i, maxHeight, count) {
      if (i === arr.length) return count;

      if (arr[i] >= maxHeight) {
        return solve(i + 1, arr[i], count + 1);
      }

      return solve(i + 1, maxHeight, count);
    }

    return solve(0, 0, 0);
  }
}
