class Solution {
  isSumOfConsecutive(n) {
    return n > 1 && (n & (n - 1)) !== 0;
  }
}
