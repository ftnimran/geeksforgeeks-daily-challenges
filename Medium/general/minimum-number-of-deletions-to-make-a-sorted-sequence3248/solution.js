class Solution {
  minDeletions(arr) {
    const lis = [];

    for (const num of arr) {
      let left = 0;
      let right = lis.length;

      while (left < right) {
        const mid = (left + right) >> 1;

        if (lis[mid] < num) left = mid + 1;
        else right = mid;
      }

      if (left === lis.length) lis.push(num);
      else lis[left] = num;
    }

    return arr.length - lis.length;
  }
}
