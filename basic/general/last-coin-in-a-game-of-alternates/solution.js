/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
  coin(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
      if (arr[i] > arr[j]) {
        i++;
      } else {
        j--;
      }
    }

    return arr[i];
  }
}
