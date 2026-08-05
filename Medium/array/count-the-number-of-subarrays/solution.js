class Solution {
  countSubarray(arr, l, r) {
    const n = arr.length;

    const prefix = new Array(n + 1);
    prefix[0] = 0;

    for (let i = 0; i < n; i++) {
      prefix[i + 1] = prefix[i] + arr[i];
    }

    function mergeSort(left, right) {
      if (right - left <= 1) return 0;

      const mid = (left + right) >> 1;

      let count = mergeSort(left, mid) + mergeSort(mid, right);

      let low = mid;
      let high = mid;

      for (let i = left; i < mid; i++) {
        while (low < right && prefix[low] - prefix[i] < l) low++;

        while (high < right && prefix[high] - prefix[i] <= r) high++;

        count += high - low;
      }

      const temp = [];

      let i = left;
      let j = mid;

      while (i < mid && j < right) {
        if (prefix[i] <= prefix[j]) temp.push(prefix[i++]);
        else temp.push(prefix[j++]);
      }

      while (i < mid) temp.push(prefix[i++]);

      while (j < right) temp.push(prefix[j++]);

      for (let k = left; k < right; k++) prefix[k] = temp[k - left];

      return count;
    }

    return mergeSort(0, n + 1);
  }
}
