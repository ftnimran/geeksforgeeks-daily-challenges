class Solution {
  countTriplets(arr, l, r) {
    arr.sort((a, b) => a - b);

    const count = (target) => {
      let ans = 0;

      for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
          const sum = arr[i] + arr[left] + arr[right];

          if (sum <= target) {
            ans += right - left;
            left++;
          } else {
            right--;
          }
        }
      }

      return ans;
    };

    return count(r) - count(l - 1);
  }
}
