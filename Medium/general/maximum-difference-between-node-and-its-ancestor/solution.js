class Solution {
  maxDiff(root) {
    let maxDiff = -Infinity;

    function solve(node) {
      if (node === null) return Infinity;

      const leftMin = solve(node.left);
      const rightMin = solve(node.right);

      const childMin = Math.min(leftMin, rightMin);

      if (childMin !== Infinity) {
        maxDiff = Math.max(maxDiff, node.data - childMin);
      }

      return Math.min(node.data, childMin);
    }

    solve(root);
    return maxDiff;
  }
}
