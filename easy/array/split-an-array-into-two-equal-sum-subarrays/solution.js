class Solution {
  canSplit(arr) {
    let total = 0;
    for (let x of arr) total += x;

    if (total % 2 !== 0) return false;

    function solve(i, sum) {
      if (i === arr.length - 1) return false;

      sum += arr[i];

      if (sum === total / 2) return true;

      return solve(i + 1, sum);
    }

    return solve(0, 0);
  }
}
