class Solution {
  maxSumSubarray(arr) {
    let noDel = arr[0];
    let oneDel = -Infinity;
    let ans = arr[0];

    for (let i = 1; i < arr.length; i++) {
      oneDel = Math.max(oneDel + arr[i], noDel);
      noDel = Math.max(noDel + arr[i], arr[i]);
      ans = Math.max(ans, noDel, oneDel);
    }

    return ans;
  }
}
