/**
 * @param {string} s
 * @param {number} x
 * @returns {boolean}
 */
class Solution {
  wifiRange(s, x) {
    const n = s.length;

    const cover = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
      if (s[i] === "1") {
        const left = Math.max(0, i - x);
        const right = Math.min(n - 1, i + x);

        for (let j = left; j <= right; j++) {
          cover[j] = true;
        }
      }
    }

    for (let ok of cover) {
      if (!ok) return false;
    }

    return true;
  }
}
