/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
class Solution {
  findMean(arr, queries) {
    let n = arr.length;

    let prefix = new Array(n + 1);
    prefix[0] = 0;

    for (let i = 0; i < n; i++) {
      prefix[i + 1] = prefix[i] + arr[i];
    }

    let res = new Array(queries.length);

    for (let i = 0; i < queries.length; i++) {
      let l = queries[i][0];
      let r = queries[i][1];

      let sum = prefix[r + 1] - prefix[l];
      res[i] = Math.floor(sum / (r - l + 1));
    }

    return res;
  }
}
