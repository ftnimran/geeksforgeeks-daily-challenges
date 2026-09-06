/**
 *@param {number[]} arr
 *@return {string}
 **/
class Solution {
  pairAndSum(arr) {
    const solve = (bit) => {
      if (bit === 27) return 0n;

      const mask = 1 << bit;
      let cnt = 0;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] & mask) cnt++;
      }

      return (
        ((BigInt(cnt) * BigInt(cnt - 1)) / 2n) * BigInt(mask) + solve(bit + 1)
      );
    };

    return solve(0).toString();
  }
}
