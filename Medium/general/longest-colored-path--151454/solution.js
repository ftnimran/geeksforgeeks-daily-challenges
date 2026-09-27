/**
 * @param {string} s
 * @param {number[][]} edges
 * @returns {number}
 */

class Solution {
  longestPath(s, edges) {
    const n = s.length;
    if (n === 0) return 0;

    const head = new Int32Array(n + 1).fill(-1);
    const to = new Int32Array(n * 2);
    const next = new Int32Array(n * 2);
    let edgeCount = 0;

    for (let i = 0; i < edges.length; i++) {
      let u = edges[i][0];
      let v = edges[i][1];

      to[edgeCount] = v;
      next[edgeCount] = head[u];
      head[u] = edgeCount++;

      to[edgeCount] = u;
      next[edgeCount] = head[v];
      head[v] = edgeCount++;
    }

    const dp = new Int32Array((n + 1) * 4);
    let maxAns = 1;

    function dfs(u, p) {
      let max_R = 0,
        max_B = 0,
        max_RB = 0,
        max_BR = 0;
      let isRed = s[u - 1] === "R";

      for (let e = head[u]; e !== -1; e = next[e]) {
        let v = to[e];
        if (v === p) continue;

        dfs(v, u);

        let idx = v * 4;
        let r = dp[idx + 0];
        let b = dp[idx + 1];
        let rb = dp[idx + 2];
        let br = dp[idx + 3];

        if (isRed) {
          if (max_R + r + 1 > maxAns) maxAns = max_R + r + 1;
          if (max_R + rb + 1 > maxAns) maxAns = max_R + rb + 1;
          if (max_RB + r + 1 > maxAns) maxAns = max_RB + r + 1;

          if (r > max_R) max_R = r;
          if (rb > max_RB) max_RB = rb;
        } else {
          if (max_B + b + 1 > maxAns) maxAns = max_B + b + 1;
          if (max_B + br + 1 > maxAns) maxAns = max_B + br + 1;
          if (max_BR + b + 1 > maxAns) maxAns = max_BR + b + 1;

          if (b > max_B) max_B = b;
          if (br > max_BR) max_BR = br;
        }
      }

      let uIdx = u * 4;
      if (isRed) {
        dp[uIdx + 0] = max_R + 1;
        dp[uIdx + 1] = 0;
        dp[uIdx + 2] = max_RB + 1;
        dp[uIdx + 3] = max_R + 1;

        if (dp[uIdx + 0] > maxAns) maxAns = dp[uIdx + 0];
        if (dp[uIdx + 2] > maxAns) maxAns = dp[uIdx + 2];
      } else {
        dp[uIdx + 0] = 0;
        dp[uIdx + 1] = max_B + 1;
        dp[uIdx + 2] = max_B + 1;
        dp[uIdx + 3] = max_BR + 1;

        if (dp[uIdx + 1] > maxAns) maxAns = dp[uIdx + 1];
        if (dp[uIdx + 3] > maxAns) maxAns = dp[uIdx + 3];
      }
    }

    dfs(1, 0);

    return maxAns;
  }
}
