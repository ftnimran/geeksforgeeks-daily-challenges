/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
  countSubsets(arr) {
    const MOD = 1000000007n;
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

    const freq = new Array(31).fill(0);

    for (let x of arr) freq[x]++;

    const mask = new Array(31).fill(-1);

    for (let x = 2; x <= 30; x++) {
      let num = x;
      let m = 0;
      let ok = true;

      for (let i = 0; i < 10; i++) {
        let cnt = 0;

        while (num % primes[i] === 0) {
          cnt++;
          num /= primes[i];
        }

        if (cnt > 1) {
          ok = false;
          break;
        }

        if (cnt) m |= 1 << i;
      }

      if (ok) mask[x] = m;
    }

    const dp = new Array(1024).fill(0n);
    dp[0] = 1n;

    for (let x = 2; x <= 30; x++) {
      if (freq[x] === 0 || mask[x] === -1) continue;

      for (let s = 1023; s >= 0; s--) {
        if ((s & mask[x]) === 0) {
          dp[s | mask[x]] = (dp[s | mask[x]] + dp[s] * BigInt(freq[x])) % MOD;
        }
      }
    }

    let ans = 0n;

    for (let i = 1; i < 1024; i++) ans = (ans + dp[i]) % MOD;

    let mul = 1n;

    for (let i = 0; i < freq[1]; i++) mul = (mul * 2n) % MOD;

    ans = (ans * mul) % MOD;

    return Number(ans);
  }
}
