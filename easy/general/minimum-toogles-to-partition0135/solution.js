class Solution {
  minToggle(arr) {
    let totalZero = 0;

    for (let x of arr) {
      if (x === 0) totalZero++;
    }

    let leftOne = 0;
    let rightZero = totalZero;

    let ans = Infinity;

    for (let x of arr) {
      if (x === 0) rightZero--;

      ans = Math.min(ans, leftOne + rightZero);

      if (x === 1) leftOne++;
    }

    ans = Math.min(ans, leftOne);

    return ans;
  }
}
