class Solution {
  checkElements(start, end, arr) {
    const set = new Set(arr);

    for (let x = start; x <= end; x++) {
      if (!set.has(x)) return false;
    }

    return true;
  }
}
