/**
 * @param {number} n
 * @return {boolean}
 */

class Solution {
  isBitSet(n) {
    return n > 0 && (n & (n + 1)) === 0;
  }
}
