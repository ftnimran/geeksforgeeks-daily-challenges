class Solution {
  maxSubsetXOR(arr) {
    const basis = new Array(32).fill(0);

    for (let num of arr) {
      let x = num;

      while (x) {
        let bit = 31 - Math.clz32(x);

        if (basis[bit] === 0) {
          basis[bit] = x;
          break;
        }

        x ^= basis[bit];
      }
    }

    let ans = 0;

    for (let bit = 31; bit >= 0; bit--) {
      if ((ans ^ basis[bit]) > ans) ans ^= basis[bit];
    }

    return ans;
  }
}
