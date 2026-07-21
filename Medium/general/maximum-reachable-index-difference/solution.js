/**
 * @param {String} s
 * @return {number}
 */

class Solution {
  maxIndexDifference(s) {
    const minStart = new Int32Array(26).fill(1e9);
    let maxDiff = -1;

    for (let i = 0; i < s.length; i++) {
      const charCode = s.charCodeAt(i) - 97;

      if (charCode === 0) {
        if (i < minStart[0]) {
          minStart[0] = i;
        }
        if (maxDiff < 0) {
          maxDiff = 0;
        }
      } else {
        if (minStart[charCode - 1] !== 1e9) {
          if (minStart[charCode - 1] < minStart[charCode]) {
            minStart[charCode] = minStart[charCode - 1];
          }

          const currentDiff = i - minStart[charCode];
          if (currentDiff > maxDiff) {
            maxDiff = currentDiff;
          }
        }
      }
    }

    return maxDiff;
  }
}
