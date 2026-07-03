class Solution {
  waysToIncreaseLCSBy1(s1, s2) {
    const n = s1.length;
    const m = s2.length;

    const memo1 = Array.from({ length: n + 1 }, () => Array(m + 1));
    const memo2 = Array.from({ length: n + 1 }, () => Array(m + 1));

    const pref = (i, j) => {
      if (i === 0 || j === 0) return 0;
      if (memo1[i][j] !== undefined) return memo1[i][j];

      if (s1[i - 1] === s2[j - 1])
        return (memo1[i][j] = 1 + pref(i - 1, j - 1));

      return (memo1[i][j] = Math.max(pref(i - 1, j), pref(i, j - 1)));
    };

    const suff = (i, j) => {
      if (i === n || j === m) return 0;
      if (memo2[i][j] !== undefined) return memo2[i][j];

      if (s1[i] === s2[j]) return (memo2[i][j] = 1 + suff(i + 1, j + 1));

      return (memo2[i][j] = Math.max(suff(i + 1, j), suff(i, j + 1)));
    };

    const L = pref(n, m);

    let ans = 0;

    for (let pos = 0; pos <= n; pos++) {
      const used = new Array(26).fill(false);

      for (let j = 0; j < m; j++) {
        const c = s2.charCodeAt(j) - 97;

        if (used[c]) continue;

        if (pref(pos, j) + 1 + suff(pos, j + 1) === L + 1) {
          ans++;
          used[c] = true;
        }
      }
    }

    return ans;
  }
}
