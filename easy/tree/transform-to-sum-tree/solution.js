/* Structure of a Tree Node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
  solve(node) {
    if (!node) return 0;

    const old = node.data;

    const leftSum = this.solve(node.left);
    const rightSum = this.solve(node.right);

    node.data = leftSum + rightSum;

    return old + leftSum + rightSum;
  }

  toSumTree(root) {
    this.solve(root);
  }
}
