/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
  sumXOR(arr) {
    let n = BigInt(arr.length);
    let ans = 0n;

    for (let bit = 0; bit < 32; bit++) {
      let one = 0n;

      for (let num of arr) {
        if ((num >> bit) & 1) {
          one++;
        }
      }

      let zero = n - one;

      ans += one * zero * (1n << BigInt(bit));
    }

    return Number(ans);
  }
}
