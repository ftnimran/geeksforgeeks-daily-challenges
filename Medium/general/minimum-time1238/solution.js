class Solution {
  minCost(n, i, d, c) {
    const memo = new Map();

    memo.set(0, 0);
    memo.set(1, i);

    const solve = (x) => {
      if (memo.has(x)) {
        return memo.get(x);
      }

      let ans = x * i;

      if ((x & 1) === 0) {
        ans = Math.min(ans, solve(x >> 1) + c);
      } else {
        const half = x >> 1;

        ans = Math.min(ans, solve(half) + c + i);

        ans = Math.min(ans, solve(half + 1) + c + d);
      }

      memo.set(x, ans);
      return ans;
    };

    return solve(n);
  }
}
