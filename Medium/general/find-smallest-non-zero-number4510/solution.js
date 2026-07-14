/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
  find(arr) {
    let req = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
      req = Math.floor((req + arr[i] + 1) / 2);
    }

    return Math.max(1, req);
  }
}
