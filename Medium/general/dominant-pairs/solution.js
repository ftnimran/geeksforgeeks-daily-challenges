/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
  dominantPairs(arr) {
    const n = arr.length;
    const half = n >> 1;

    const left = arr.slice(0, half);
    const right = arr.slice(half);

    this.mergeSort(left);
    this.mergeSort(right);

    let j = 0;
    let count = 0;

    for (let i = 0; i < half; i++) {
      while (j < half && left[i] >= 5 * right[j]) {
        j++;
      }

      count += j;
    }

    return count;
  }

  mergeSort(arr) {
    if (arr.length <= 1) return;

    const mid = arr.length >> 1;

    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    this.mergeSort(left);
    this.mergeSort(right);

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k++] = left[i++];
      } else {
        arr[k++] = right[j++];
      }
    }

    while (i < left.length) {
      arr[k++] = left[i++];
    }

    while (j < right.length) {
      arr[k++] = right[j++];
    }
  }
}
