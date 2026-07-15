class Solution {
  bitonic(nums) {
    const n = nums.length;

    const inc = new Array(n).fill(-1);
    const dec = new Array(n).fill(-1);

    const LIS = (i) => {
      if (inc[i] !== -1) return inc[i];

      inc[i] = 1;

      if (i > 0 && nums[i] >= nums[i - 1]) {
        inc[i] = 1 + LIS(i - 1);
      }

      return inc[i];
    };

    const LDS = (i) => {
      if (dec[i] !== -1) return dec[i];

      dec[i] = 1;

      if (i < n - 1 && nums[i] >= nums[i + 1]) {
        dec[i] = 1 + LDS(i + 1);
      }

      return dec[i];
    };

    let ans = 1;

    for (let i = 0; i < n; i++) {
      ans = Math.max(ans, LIS(i) + LDS(i) - 1);
    }

    return ans;
  }
}
