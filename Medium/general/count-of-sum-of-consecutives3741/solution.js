class Solution {
  getCount(n) {
    let left = 1;
    let right = 2;
    let sum = 3;
    let ans = 0;

    while (left < right && left <= n / 2) {
      if (sum === n) {
        ans++;
        sum -= left++;
      } else if (sum < n) {
        right++;
        sum += right;
      } else {
        sum -= left++;
      }
    }

    return ans;
  }
}
