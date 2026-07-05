class Solution {
  maxCharGap(s) {
    const first = new Array(26).fill(-1);

    const dfs = (i, ans) => {
      if (i === s.length) return ans;

      const idx = s.charCodeAt(i) - 97;

      if (first[idx] === -1) {
        first[idx] = i;
      } else {
        ans = Math.max(ans, i - first[idx] - 1);
      }

      return dfs(i + 1, ans);
    };

    return dfs(0, -1);
  }
}
