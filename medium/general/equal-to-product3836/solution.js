/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {boolean}
 */

class Solution {
  isProduct(arr, target) {
    const set = new Set();

    for (let x of arr) {
      if (x === 0) {
        if (target === 0) return true;
      } else {
        if (target % x === 0) {
          const need = target / x;

          if (set.has(need)) return true;
        }
      }

      set.add(x);
    }

    return false;
  }
}
