/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
  sameMod(arr) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    let g = 0;

    for (let i = 1; i < arr.length; i++) {
      g = gcd(g, Math.abs(arr[i] - arr[0]));
    }

    if (g === 0) return -1;

    let count = 0;

    for (let i = 1; i * i <= g; i++) {
      if (g % i === 0) {
        count += i * i === g ? 1 : 2;
      }
    }

    return count;
  }
}
