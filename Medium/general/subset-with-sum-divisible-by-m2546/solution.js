class Solution {
  divisibleByK(arr, k) {
    const n = arr.length;
    const memo = Array.from({ length: n + 1 }, () => Array(k).fill(undefined));

    const dfs = (i, rem, taken) => {
      if (taken && rem === 0) return true;
      if (i === n) return false;

      if (taken && memo[i][rem] !== undefined) {
        return memo[i][rem];
      }

      const ans =
        dfs(i + 1, (rem + arr[i]) % k, true) || dfs(i + 1, rem, taken);

      if (taken) memo[i][rem] = ans;

      return ans;
    };

    return dfs(0, 0, false);
  }
}
