/* Binary Tree Node Structure
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} k
 * @return {number}
 */

class Solution {
  getCount(root, k) {
    const levels = [];

    const dfs = (node, level) => {
      if (!node) return;

      if (!node.left && !node.right) {
        if (level <= k) levels.push(level);
        return;
      }

      dfs(node.left, level + 1);
      dfs(node.right, level + 1);
    };

    dfs(root, 1);

    levels.sort((a, b) => a - b);

    let count = 0;
    let budget = k;

    for (const level of levels) {
      if (budget < level) break;
      budget -= level;
      count++;
    }

    return count;
  }
}
