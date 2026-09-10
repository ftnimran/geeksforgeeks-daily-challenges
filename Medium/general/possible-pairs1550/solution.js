class Solution {
  /**
   * @param {number} x
   * @param {number} y
   * @returns {number}
   */
  pairCount(x, y) {
    if (y % x !== 0) return 0;

    const countPrimeFactors = (n) => {
      if (n === 1) return 0;

      for (let p = 2; p * p <= n; p++) {
        if (n % p === 0) {
          while (n % p === 0) n /= p;
          return 1 + countPrimeFactors(n);
        }
      }

      return 1;
    };

    return 2 ** countPrimeFactors(y / x);
  }
}
