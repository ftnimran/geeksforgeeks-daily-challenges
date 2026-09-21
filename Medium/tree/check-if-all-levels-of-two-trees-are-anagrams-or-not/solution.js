/*
Structure of binary tree Node
class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}
*/

/**
 * @param {Node} root1
 * @param {Node} root2
 * @return {boolean}
 */

class Solution {
  areAnagrams(root1, root2) {
    const levels1 = [];
    const levels2 = [];

    const dfs = (node, level, levelsArr) => {
      if (!node) return;
      if (!levelsArr[level]) levelsArr[level] = [];

      levelsArr[level].push(node.data);

      dfs(node.left, level + 1, levelsArr);
      dfs(node.right, level + 1, levelsArr);
    };

    dfs(root1, 0, levels1);
    dfs(root2, 0, levels2);

    if (levels1.length !== levels2.length) return false;

    for (let i = 0; i < levels1.length; i++) {
      if (levels1[i].length !== levels2[i].length) return false;

      levels1[i].sort((a, b) => a - b);
      levels2[i].sort((a, b) => a - b);

      for (let j = 0; j < levels1[i].length; j++) {
        if (levels1[i][j] !== levels2[i][j]) return false;
      }
    }

    return true;
  }
}
