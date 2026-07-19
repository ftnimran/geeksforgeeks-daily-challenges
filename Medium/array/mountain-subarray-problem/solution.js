class Solution {
  processQueries(arr, queries) {
    const n = arr.length;
    const right_up = new Array(n);
    const left_up = new Array(n);

    right_up[n - 1] = n - 1;
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] <= arr[i + 1]) {
        right_up[i] = right_up[i + 1];
      } else {
        right_up[i] = i;
      }
    }

    left_up[0] = 0;
    for (let i = 1; i < n; i++) {
      if (arr[i] <= arr[i - 1]) {
        left_up[i] = left_up[i - 1];
      } else {
        left_up[i] = i;
      }
    }

    const result = [];
    for (let i = 0; i < queries.length; i++) {
      const [l, r] = queries[i];
      result.push(right_up[l] >= left_up[r]);
    }

    return result;
  }
}
