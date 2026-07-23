class Solution {
  canRepresentBST(arr) {
    let i = 0;

    function dfs(low, high) {
      if (i === arr.length) return;

      const x = arr[i];

      if (x < low || x > high) return;

      i++;

      dfs(low, x);
      dfs(x, high);
    }

    dfs(-Infinity, Infinity);

    return i === arr.length;
  }
}
