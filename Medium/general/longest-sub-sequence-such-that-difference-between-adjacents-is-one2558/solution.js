/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
  longestSubseq(arr) {
    const dp = new Int32Array(1000002);
    let ans = 1;

    for (let i = 0; i < arr.length; i++) {
      const x = arr[i];
      const len = Math.max(dp[x - 1], dp[x + 1]) + 1;

      if (len > dp[x]) dp[x] = len;
      if (len > ans) ans = len;
    }

    return ans;
  }
}
