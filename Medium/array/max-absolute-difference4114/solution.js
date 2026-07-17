class Solution {
  maxDiffSubArrays(arr) {
    const n = arr.length;

    const leftMax = new Array(n);
    const leftMin = new Array(n);
    const rightMax = new Array(n);
    const rightMin = new Array(n);

    // Left Maximum
    let curr = arr[0];
    let best = arr[0];
    leftMax[0] = best;

    for (let i = 1; i < n; i++) {
      curr = Math.max(arr[i], curr + arr[i]);
      best = Math.max(best, curr);
      leftMax[i] = best;
    }

    // Left Minimum
    curr = arr[0];
    best = arr[0];
    leftMin[0] = best;

    for (let i = 1; i < n; i++) {
      curr = Math.min(arr[i], curr + arr[i]);
      best = Math.min(best, curr);
      leftMin[i] = best;
    }

    // Right Maximum
    curr = arr[n - 1];
    best = arr[n - 1];
    rightMax[n - 1] = best;

    for (let i = n - 2; i >= 0; i--) {
      curr = Math.max(arr[i], curr + arr[i]);
      best = Math.max(best, curr);
      rightMax[i] = best;
    }

    // Right Minimum
    curr = arr[n - 1];
    best = arr[n - 1];
    rightMin[n - 1] = best;

    for (let i = n - 2; i >= 0; i--) {
      curr = Math.min(arr[i], curr + arr[i]);
      best = Math.min(best, curr);
      rightMin[i] = best;
    }

    let ans = 0;

    for (let i = 0; i < n - 1; i++) {
      ans = Math.max(
        ans,
        Math.abs(leftMax[i] - rightMin[i + 1]),
        Math.abs(leftMin[i] - rightMax[i + 1]),
      );
    }

    return ans;
  }
}
