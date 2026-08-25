/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
  minMoves(arr) {
    const n = arr.length;
    const pos = new Array(n + 1);

    for (let i = 0; i < n; i++) {
      pos[arr[i]] = i;
    }

    let maxLen = 1;
    let len = 1;

    for (let x = 1; x < n; x++) {
      if (pos[x] < pos[x + 1]) {
        len++;
        if (len > maxLen) maxLen = len;
      } else {
        len = 1;
      }
    }

    return n - maxLen;
  }
}
