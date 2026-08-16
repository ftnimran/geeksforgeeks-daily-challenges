class Solution {
  minProd(arr) {
    let ans = Infinity;

    function dfs(i, product, taken) {
      if (i === arr.length) {
        if (taken) ans = Math.min(ans, product);
        return;
      }

      dfs(i + 1, product * arr[i], true);
      dfs(i + 1, product, taken);
    }

    dfs(0, 1, false);

    return ans;
  }
}
