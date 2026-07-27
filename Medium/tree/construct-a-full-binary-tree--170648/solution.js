/* Structure of Binary Tree Node
class Node
{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
} */

class Solution {
  constructBinaryTree(pre, preMirror) {
    let preIndex = 0;

    function build(left, right) {
      const root = new Node(pre[preIndex++]);

      if (left === right || preIndex >= pre.length) {
        return root;
      }

      let idx = left;
      while (preMirror[idx] !== pre[preIndex]) {
        idx++;
      }

      root.left = build(idx, right);
      root.right = build(left + 1, idx - 1);

      return root;
    }

    return build(0, pre.length - 1);
  }
}
