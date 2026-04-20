class Solution {
  derangeCount(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;

    return (n - 1) * (this.derangeCount(n - 1) + this.derangeCount(n - 2));
  }
}
