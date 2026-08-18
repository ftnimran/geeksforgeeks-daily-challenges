/**
 * @param {string} s
 * @return {string}
 */

class Solution {
  compress(s) {
    if (s.length === 1) {
      return s;
    }

    const n = s.length;

    if (n % 2 === 0) {
      const half = n / 2;
      let same = true;

      for (let i = 0; i < half; i++) {
        if (s[i] !== s[i + half]) {
          same = false;
          break;
        }
      }

      if (same) {
        return this.compress(s.slice(0, half)) + "*";
      }
    }

    return this.compress(s.slice(0, n - 1)) + s[n - 1];
  }
}
