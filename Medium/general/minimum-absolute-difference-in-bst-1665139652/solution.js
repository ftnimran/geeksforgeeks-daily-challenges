/* Binary Tree Node Structure
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @return s {number}
 */

class Solution {
  absDiff(root) {
    let minDiff = Infinity;
    let prev = null;

    function inorder(node) {
      if (node === null) return;

      inorder(node.left);

      if (prev !== null) {
        let diff = node.data - prev;
        if (diff < minDiff) minDiff = diff;
      }
      prev = node.data;

      inorder(node.right);
    }

    inorder(root);
    return minDiff;
  }
}
