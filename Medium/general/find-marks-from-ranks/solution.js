/**
 * @param {number[]} l
 * @param {number[]} r
 * @param {number[]} rank
 * @returns {number[]}
 */
class Solution {
  getMarks(l, r, rank) {
    const n = l.length;
    const prefix = new Array(n);

    let count = 0;

    for (let i = 0; i < n; i++) {
      count += r[i] - l[i] + 1;
      prefix[i] = count;
    }

    const findInterval = (k, left, right) => {
      if (left === right) return left;

      const mid = left + ((right - left) >> 1);

      if (prefix[mid] >= k) {
        return findInterval(k, left, mid);
      }

      return findInterval(k, mid + 1, right);
    };

    const ans = new Array(rank.length);

    for (let i = 0; i < rank.length; i++) {
      const k = rank[i];
      const idx = findInterval(k, 0, n - 1);
      const before = idx === 0 ? 0 : prefix[idx - 1];

      ans[i] = l[idx] + (k - before) - 1;
    }

    return ans;
  }
}
