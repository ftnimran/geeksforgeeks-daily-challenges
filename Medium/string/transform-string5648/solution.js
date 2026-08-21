/**
 * @param {String} s1
 * @param {String} s2
 * @returns {number}
 */

class Solution {
  transform(s1, s2) {
    let n = s1.length;

    if (n !== s2.length) return -1;

    let count = new Map();

    for (let ch of s1) {
      count.set(ch, (count.get(ch) || 0) + 1);
    }

    for (let ch of s2) {
      if (!count.has(ch)) return -1;
      count.set(ch, count.get(ch) - 1);
      if (count.get(ch) < 0) return -1;
    }

    let i = n - 1;
    let j = n - 1;
    let ans = 0;

    while (i >= 0) {
      if (s1[i] === s2[j]) {
        i--;
        j--;
      } else {
        ans++;
        i--;
      }

      if (j < 0) break;
    }

    return ans;
  }
}
