/*
 * @param {number} n
 * @return {number}
 */
class Solution {
  prefixStrings(n) {
    const MOD = 1000000007n;
    let ans = 1n;

    const modPow = (a, b) => {
      let res = 1n;

      while (b > 0n) {
        if (b & 1n) {
          res = (res * a) % MOD;
        }

        a = (a * a) % MOD;
        b >>= 1n;
      }

      return res;
    };

    for (let i = 1n; i <= BigInt(n); i++) {
      ans = (ans * (4n * i - 2n)) % MOD;
      ans = (ans * modPow(i + 1n, MOD - 2n)) % MOD;
    }

    return Number(ans);
  }
}
