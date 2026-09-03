class Solution {
  maxDiffSum(arr) {
    const n = arr.length;
    const memo = Array.from({ length: n }, () => [null, null]);

    const solve = (i, prevChoice) => {
      if (i === n) return 0;

      if (memo[i][prevChoice] !== null) {
        return memo[i][prevChoice];
      }

      const prev = prevChoice === 0 ? arr[i - 1] : 1;

      const keep = Math.abs(arr[i] - prev) + solve(i + 1, 0);

      const replace = Math.abs(1 - prev) + solve(i + 1, 1);

      return (memo[i][prevChoice] = Math.max(keep, replace));
    };

    if (n <= 1) return 0;

    return Math.max(solve(1, 0), solve(1, 1));
  }
}
