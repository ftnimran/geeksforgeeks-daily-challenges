/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

class Solution {
  count(n, m) {
    const memo = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(-1));

    const validNext = Array.from({ length: m + 1 }, () => []);

    for (let current = 1; current <= m; current++) {
      for (let next = 1; next <= m; next++) {
        if (current % next === 0 || next % current === 0) {
          validNext[current].push(next);
        }
      }
    }

    const solve = (remaining, previous) => {
      if (remaining === 0) {
        return 1;
      }

      if (memo[remaining][previous] !== -1) {
        return memo[remaining][previous];
      }

      let total = 0;

      for (const next of validNext[previous]) {
        total += solve(remaining - 1, next);
      }

      memo[remaining][previous] = total;
      return total;
    };

    let answer = 0;

    for (let first = 1; first <= m; first++) {
      answer += solve(n - 1, first);
    }

    return answer;
  }
}
