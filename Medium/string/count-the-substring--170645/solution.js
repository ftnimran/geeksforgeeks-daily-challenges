class Solution {
  countSubstring(s) {
    const n = s.length;

    const pre = new Array(n + 1);
    pre[0] = 0;

    for (let i = 0; i < n; i++) {
      pre[i + 1] = pre[i] + (s[i] === "1" ? 1 : -1);
    }

    const vals = [...pre].sort((a, b) => a - b);

    const map = new Map();
    let id = 1;

    for (const x of vals) {
      if (!map.has(x)) map.set(x, id++);
    }

    const bit = new Array(id + 1).fill(0);

    const update = (i) => {
      while (i < bit.length) {
        bit[i]++;
        i += i & -i;
      }
    };

    const query = (i) => {
      let res = 0;
      while (i > 0) {
        res += bit[i];
        i -= i & -i;
      }
      return res;
    };

    let ans = 0;

    for (const x of pre) {
      const idx = map.get(x);
      ans += query(idx - 1);
      update(idx);
    }

    return ans;
  }
}
