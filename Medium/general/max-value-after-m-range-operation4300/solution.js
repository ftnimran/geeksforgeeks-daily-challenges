class Solution {
  findMax(n, a, b, k) {
    const diff = new Array(n + 1).fill(0);

    for (let i = 0; i < a.length; i++) {
      diff[a[i]] += k[i];

      if (b[i] + 1 < n) {
        diff[b[i] + 1] -= k[i];
      }
    }

    let curr = 0;
    let ans = 0;

    for (let i = 0; i < n; i++) {
      curr += diff[i];
      if (curr > ans) ans = curr;
    }

    return ans;
  }
}
