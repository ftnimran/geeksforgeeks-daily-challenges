class Solution {
  find3Numbers(arr) {
    const n = arr.length;
    if (n < 3) return [];

    let leftMin = new Array(n);
    leftMin[0] = 0;
    let minIdx = 0;
    for (let i = 1; i < n; i++) {
      if (arr[i] < arr[minIdx]) {
        minIdx = i;
      }
      leftMin[i] = minIdx;
    }

    let rightMax = new Array(n);
    rightMax[n - 1] = n - 1;
    let maxIdx = n - 1;
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > arr[maxIdx]) {
        maxIdx = i;
      }
      rightMax[i] = maxIdx;
    }

    for (let j = 0; j < n; j++) {
      if (arr[leftMin[j]] < arr[j] && arr[j] < arr[rightMax[j]]) {
        return [arr[leftMin[j]], arr[j], arr[rightMax[j]]];
      }
    }

    return [];
  }
}
