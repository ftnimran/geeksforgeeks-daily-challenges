/**
 * @param {number[]} b
 * @return {number}
 */

class Solution {
  minOperations(arr) {
    const MOD = 1000000007n;
    const n = arr.length;

    const visited = new Array(n).fill(false);

    const spf = new Array(n + 1);
    for (let i = 0; i <= n; i++) spf[i] = i;

    for (let i = 2; i * i <= n; i++) {
      if (spf[i] === i) {
        for (let j = i * i; j <= n; j += i) {
          if (spf[j] === j) spf[j] = i;
        }
      }
    }

    const mp = new Map();

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;

      let len = 0;
      let node = i;

      while (!visited[node]) {
        visited[node] = true;
        node = arr[node] - 1;
        len++;
      }

      while (len > 1) {
        let p = spf[len];
        let cnt = 0;

        while (len % p === 0) {
          len /= p;
          cnt++;
        }

        mp.set(p, Math.max(mp.get(p) || 0, cnt));
      }
    }

    let ans = 1n;

    for (const [prime, power] of mp) {
      let p = BigInt(prime);
      for (let i = 0; i < power; i++) {
        ans = (ans * p) % MOD;
      }
    }

    return Number(ans);
  }
}
