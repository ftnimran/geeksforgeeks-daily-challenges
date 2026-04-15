/**
 * @param {String} s
 * @returns {String}
 */
class Solution {
  URLify(s) {
    function solve(i) {
      if (i === s.length) return "";

      if (s[i] === " ") {
        return "%20" + solve(i + 1);
      } else {
        return s[i] + solve(i + 1);
      }
    }

    return solve(0);
  }
}
