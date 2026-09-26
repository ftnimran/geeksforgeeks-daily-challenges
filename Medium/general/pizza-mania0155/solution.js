/*
 * @param {number} x
 * @param {number} s
 * @param {number} m
 * @param {number} l
 * @param {number} cs
 * @param {number} cm
 * @param {number} cl
 * @return {number}
 */
class Solution {
  minimumCost(x, s, m, l, cs, cm, cl) {
    const memo = new Array(x + 1).fill(-1);

    const solve = (rem) => {
      if (rem <= 0) return 0;

      if (memo[rem] !== -1) return memo[rem];

      let costSmall = cs + solve(rem - s);
      let costMedium = cm + solve(rem - m);
      let costLarge = cl + solve(rem - l);

      return (memo[rem] = Math.min(costSmall, costMedium, costLarge));
    };

    return solve(x);
  }
}
