class Solution {
  countKdivPairs(arr, k) {
    const map = new Map();

    let pairs = 0;

    for (const num of arr) {
      const rem = num % k;
      const need = (k - rem) % k;

      pairs += map.get(need) || 0;

      map.set(rem, (map.get(rem) || 0) + 1);
    }

    return pairs;
  }
}
