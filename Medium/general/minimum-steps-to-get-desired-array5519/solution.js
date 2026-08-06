class Solution {
  countMinOperations(arr) {
    return this.solve(arr);
  }

  solve(arr) {
    let operations = 0;
    let hasNonZero = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] & 1) {
        arr[i]--;
        operations++;
      }

      if (arr[i] !== 0) {
        hasNonZero = true;
      }
    }

    if (!hasNonZero) {
      return operations;
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i] = Math.floor(arr[i] / 2);
    }

    return operations + 1 + this.solve(arr);
  }
}
