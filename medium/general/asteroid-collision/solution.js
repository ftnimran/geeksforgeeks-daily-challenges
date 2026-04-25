/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
  reducePairs(arr) {
    let stack = [];

    for (let x of arr) {
      while (stack.length > 0 && stack[stack.length - 1] * x < 0) {
        let top = stack.pop();

        if (Math.abs(top) === Math.abs(x)) {
          x = 0;
          break;
        } else if (Math.abs(top) > Math.abs(x)) {
          x = top;
        }
      }

      if (x !== 0) {
        stack.push(x);
      }
    }

    return stack;
  }
}
