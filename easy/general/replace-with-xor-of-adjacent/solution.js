class Solution {
  solve(arr, temp, i, n) {
    if (i === n) return;

    if (i === 0) arr[i] = temp[0] ^ temp[1];
    else if (i === n - 1) arr[i] = temp[n - 2] ^ temp[n - 1];
    else arr[i] = temp[i - 1] ^ temp[i + 1];

    this.solve(arr, temp, i + 1, n);
  }

  replaceElements(arr) {
    const temp = [...arr];

    this.solve(arr, temp, 0, arr.length);

    return arr;
  }
}
