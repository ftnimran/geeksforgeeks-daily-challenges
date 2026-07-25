/* Structure of Binary Tree Node
class Node
{
    constructor(x){
        this.data = x;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @return {number}
 */
class Solution {
  longestConsecutive(root) {
    let ans = 1;

    function dfs(node, len) {
      if (!node) return;

      ans = Math.max(ans, len);

      if (node.left) {
        if (node.left.data === node.data + 1) {
          dfs(node.left, len + 1);
        } else {
          dfs(node.left, 1);
        }
      }

      if (node.right) {
        if (node.right.data === node.data + 1) {
          dfs(node.right, len + 1);
        } else {
          dfs(node.right, 1);
        }
      }
    }

    dfs(root, 1);

    return ans === 1 ? -1 : ans;
  }
}
