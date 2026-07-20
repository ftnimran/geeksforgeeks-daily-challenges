class Solution {
  lcp(a, b) {
    let i = 0;

    while (i < a.length && i < b.length && a[i] === b[i]) i++;

    return i;
  }

  findPrefixes(arr) {
    const words = arr.map((w, i) => [w, i]);

    words.sort((a, b) => a[0].localeCompare(b[0]));

    const ans = new Array(arr.length);

    for (let i = 0; i < words.length; i++) {
      let left = 0;
      let right = 0;

      if (i > 0) left = this.lcp(words[i][0], words[i - 1][0]);

      if (i + 1 < words.length) right = this.lcp(words[i][0], words[i + 1][0]);

      const len = Math.max(left, right) + 1;

      ans[words[i][1]] = words[i][0].substring(0, len);
    }

    return ans;
  }
}
