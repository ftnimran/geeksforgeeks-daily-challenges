class Solution {
  /**
   * @param {number[]} arr
   * @return {number}
   */
  minSwaps(arr) {
    const n = arr.length;
    let totalOnes = 0;

    for (let i = 0; i < n; i++) {
      if (arr[i] === 1) totalOnes++;
    }

    if (totalOnes === 0) return -1;
    if (totalOnes === n || totalOnes === 1) return 0;

    let currentOnesInWindow = 0;
    for (let i = 0; i < totalOnes; i++) {
      if (arr[i] === 1) currentOnesInWindow++;
    }

    let maxOnesInWindow = currentOnesInWindow;

    for (let i = totalOnes; i < n; i++) {
      currentOnesInWindow += arr[i] - arr[i - totalOnes];
      if (currentOnesInWindow > maxOnesInWindow) {
        maxOnesInWindow = currentOnesInWindow;
      }
    }

    return totalOnes - maxOnesInWindow;
  }
}
