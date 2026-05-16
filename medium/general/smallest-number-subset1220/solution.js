/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
  findSmallest(arr) {
    arr.sort((a, b) => a - b);

    let res = 1;

    for (let x of arr) {
      if (x > res) break;

      res += x;
    }

    return res;
  }
}
