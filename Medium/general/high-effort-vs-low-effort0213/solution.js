class Solution {
  maxTask(h, l) {
    const n = h.length;
    const memo = new Array(n).fill(-1);

    function solve(i) {
      if (i < 0) {
        return 0;
      }

      if (memo[i] !== -1) {
        return memo[i];
      }

      const low = solve(i - 1) + l[i];
      const high = solve(i - 2) + h[i];

      return (memo[i] = Math.max(low, high));
    }

    return solve(n - 1);
  }
}
