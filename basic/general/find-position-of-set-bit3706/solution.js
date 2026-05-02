/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
  findPosition(n) {
    if (n === 0 || (n & (n - 1)) !== 0) {
      return -1;
    }

    let pos = 1;

    while ((n & 1) === 0) {
      n = n >> 1;
      pos++;
    }

    return pos;
  }
}
