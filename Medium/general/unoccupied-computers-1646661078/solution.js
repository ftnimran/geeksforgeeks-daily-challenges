/**
 * @param {number} n
 * @param {string} s
 * @returns {number}
 */
class Solution {
  solve(n, s) {
    const state = new Int8Array(26);
    let rejected = 0;

    const process = (i, available) => {
      if (i === s.length) return rejected;

      const idx = s.charCodeAt(i) - 65;

      if (state[idx] === 0) {
        if (available > 0) {
          state[idx] = 1;
          available--;
        } else {
          rejected++;
          state[idx] = 2;
        }
      } else if (state[idx] === 1) {
        state[idx] = 0;
        available++;
      }

      return process(i + 1, available);
    };

    return process(0, n);
  }
}
