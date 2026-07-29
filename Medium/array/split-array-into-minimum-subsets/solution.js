/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
  minSubsets(arr) {
    const values = new Set(arr);
    let subsets = 0;

    for (let i = 0; i < arr.length; i++) {
      if (!values.has(arr[i] - 1)) {
        subsets++;
      }
    }

    return subsets;
  }
}
