class Solution {
  formPyramid(arr) {
    const n = arr.length;
    const memoL = new Int32Array(n);
    const memoR = new Int32Array(n);
    let sum = 0;

    const getL = (i) => {
      if (i === 0) return Math.min(arr[0], 1);
      if (memoL[i] !== 0) return memoL[i];
      return (memoL[i] = Math.min(arr[i], getL(i - 1) + 1));
    };

    const getR = (i) => {
      if (i === n - 1) return Math.min(arr[n - 1], 1);
      if (memoR[i] !== 0) return memoR[i];
      return (memoR[i] = Math.min(arr[i], getR(i + 1) + 1));
    };

    let maxH = 0;

    for (let i = 0; i < n; i++) {
      sum += arr[i];
      const h = Math.min(getL(i), getR(i));
      if (h > maxH) maxH = h;
    }

    return sum - maxH * maxH;
  }
}
